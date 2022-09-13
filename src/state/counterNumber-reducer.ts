type NumberStateType = { num: number }
type setNewValueACType = ReturnType<typeof setNewValueAC>
type ActionsType = setNewValueACType

const initialState: NumberStateType = {num: 0}

export const CounterNumberReducer = (state: NumberStateType = initialState, action: ActionsType): NumberStateType => {
    switch (action.type) {
        case "SET_NEW_VALUE": {
            return {...state, num: action.value};
        }
        default : {
            return state;
        }
    }
}

export const setNewValueAC = (value: number) => ({
    type: 'SET_NEW_VALUE', value: value
} as const)
