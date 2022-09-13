
type SettingStateType = {
    valueInputMin: number
    valueInputMax: number
    InputMin: number
    InputMax: number
}
type ValueInputMinACType = ReturnType<typeof ValueInputMinAC>
type ValueInputMaxACType = ReturnType<typeof ValueInputMaxAC>
type setNewSettingACType = ReturnType<typeof setNewSettingAC>
type ActionsType = ValueInputMinACType | ValueInputMaxACType|setNewSettingACType

const initialState: SettingStateType = {
    valueInputMin: 0,
    valueInputMax: 5,
    InputMin: 0,
    InputMax: 5
}

export const SettingReducer = (state: SettingStateType = initialState, action: ActionsType): SettingStateType => {
    switch (action.type) {

        case 'VALUE_INPUT_MIN': {
            return {...state, InputMin: action.value}
        }
        case 'VALUE_INPUT_MAX': {
            return {...state, InputMax: action.value}
        }
        case 'SET_NEW_SETTING': {
            return {...state, valueInputMax:action.InputMax, valueInputMin:action.InputMin}
        }
        default : {
            return state
        }
    }
}


export const ValueInputMinAC = (value: number) => ({
    type: 'VALUE_INPUT_MIN', value: value
} as const)
export const ValueInputMaxAC = (value: number) => ({
    type: 'VALUE_INPUT_MAX', value: value
} as const)
export const setNewSettingAC = (InputMin: number, InputMax: number) => ({
    type: 'SET_NEW_SETTING', InputMin: InputMin, InputMax:InputMax
} as const)


