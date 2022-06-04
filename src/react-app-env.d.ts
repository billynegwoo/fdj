/// <reference types="react-scripts" />
type numberType = {
    selected: boolean
    value: number
}

type starType = {
    selected: boolean
    value: number
}

type actionType = {
    type: string,
    payload: any
}

type gridType = {
    stars: starType[]
    numbers: numberType[]
}

type multipleType = {
    cost: {
        currency: string
        value: number
    }
    pattern: number[]
}

type euromillionsType = {
    name: string
    state: string
    drawConfiguration: {
        weekMasks: number[]
        nextDrawMask: number
    }
    jackpot: {
        date: string
    }
    multiples: nultipleType[]
    subscriptionEnabled: boolean
}
