import React from 'react';
import {useGridContext} from "../contexts/grid";

type PropsType = {
    number: numberType
}

function Number(props: PropsType) {
    const { number } = props
    const {state, dispatch} = useGridContext()
    const selectedClass = number.selected ? 'selected' : ''

    function handleClick(){
        const newNumbers: numberType[] = state.numbers.map((stateNumber: numberType): numberType => {
            if(number.value === stateNumber.value ){
                return { value: number.value, selected: !number.selected }
            }
            return stateNumber
        })
        dispatch({type: 'UPDATE_NUMBERS', payload: {stars: state.stars, numbers: newNumbers}})
    }

    return (
        <button className={`circle ${selectedClass}`} onClick={handleClick}>{number.value}</button>
    );
}

export default Number;