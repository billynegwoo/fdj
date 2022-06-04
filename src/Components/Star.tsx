import React from 'react';
import {useGridContext} from "../contexts/grid";

type PropsType = {
    star: starType
}

function Star(props: PropsType) {
    const {state, dispatch} = useGridContext()
    const { star } = props
    const selectedClass = star.selected ? 'selected' : ''

    function handleClick(): void{
        const newStars: starType[] = state.stars.map((stateStar: starType): starType => {
            if(star.value === stateStar.value ){
                return { value: star.value, selected: !star.selected }
            }
            return stateStar
        })
        dispatch({type: 'UPDATE_STARS', payload: {stars: newStars, numbers: state.numbers}})
    }

    return (
        <button className={`star ${selectedClass}`} onClick={handleClick}>{star.value}</button>
    );
}

export default Star;