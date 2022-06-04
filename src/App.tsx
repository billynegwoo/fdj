import React, {useEffect, useReducer, useState} from 'react';
import './App.css';

import Star from "./Components/Star";
import Number from "./Components/Number";

import euromillions from "./euromillions.json"
import {gridReducer} from "./reducers/grid";
import GridContext from "./contexts/grid"

const NUMBERS: number= 50
const STARS: number = 12
const DEFAULT_CURRENCY: string = 'EUR'

const defaultNumbers: numberType[]  = new Array(NUMBERS).fill(null)
    .map((e: null, idx: number): numberType => {
        return { selected: false, value: idx + 1}
    })

const defaultStars: starType[]  = new Array(STARS).fill(null)
    .map((e: null, idx: number): starType => {
        return { selected: false, value: idx + 1}
    })

const initialState: gridType  = {
    stars: defaultStars,
    numbers: defaultNumbers
}

function App() {

    const [state, dispatch] = useReducer(gridReducer, initialState)
    const [price, setPrice] = useState("")
    const providerState = {
        state,
        dispatch
    }

    useEffect((): void => {
        const starsCount: number = state.stars.filter((star: starType): boolean => star.selected).length
        const numbersCount: number = state.numbers.filter((number: numberType): boolean => number.selected).length
        const gridPrice: multipleType = euromillions.multiples.reduce((acc: multipleType, curr: multipleType): multipleType => {
            const [numbers, stars] = curr.pattern
            if(numbers === numbersCount && stars === starsCount) return curr
            return acc
        }, {cost: { value:0 , currency: DEFAULT_CURRENCY}} as multipleType)
            setPrice(
                new Intl.NumberFormat('fr-FR', { style: 'currency', currency: gridPrice.cost.currency })
                    .format(gridPrice.cost.value / 100)
            )
    }, [state])


    return (
        <GridContext.Provider value={providerState}>
            <div className="App">
                <div className="price">{price}</div>
                <div className="grid">
                    <div className="container numbers">
                        {state.numbers.map((number: numberType, idx: number) =>
                            <Number number={number} key={idx}/>
                        )}
                    </div>
                    <div className="container stars">
                        {state.stars.map((star:starType, idx: number) =>
                            <Star star={star} key={idx} />
                        )}
                    </div>
                </div>
            </div>
        </GridContext.Provider>
    );
}

export default App;
