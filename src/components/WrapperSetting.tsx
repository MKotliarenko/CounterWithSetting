import React, { useCallback } from 'react';
import {Button} from "./Button";
import {InputUniversal} from "./InputUniversal";
import {useDispatch} from "react-redux";
import {setNewValueAC} from "../state/counterNumber-reducer";
import {setNewSettingAC, ValueInputMaxAC, ValueInputMinAC} from '../state/setting-reducer';

type WrapperSettingPropsType = {
    valueInputMax: number
    valueInputMin: number
    InputMin: number
    InputMax: number
    messageMax: boolean
    messageMin: boolean


}
export const WrapperSetting: React.FC<WrapperSettingPropsType> = React.memo((
    {
        valueInputMax,
        valueInputMin,
        InputMin, InputMax,
        messageMax,
        messageMin
    }) => {
    console.log("wraperSetting")

    const dispatch = useDispatch();

    const disableSetButton = valueInputMin === InputMin && valueInputMax === InputMax || messageMin || messageMax

    const onClickCallback = useCallback(() => {
        dispatch(setNewSettingAC(InputMin,InputMax))
        dispatch(setNewValueAC(InputMin))
    },[dispatch,InputMin,InputMax])
    const inputMaxCallback =useCallback((maxValue:number)=>{
        dispatch(ValueInputMaxAC(maxValue))
    },[dispatch])
    const inputMinCallback =useCallback((minValue:number)=>{
        dispatch(ValueInputMinAC(minValue))
    },[dispatch])

    return (
        <div className={'Wrapper'}>
            <div className={'InputWrapper'}>
                <span className={'span'}>Max value:</span>
                <InputUniversal  ValueInputCallback={inputMaxCallback} inputValue={InputMax}
                                message={messageMax}/>

                <span className={'span'}>Start value:</span>
                <InputUniversal ValueInputCallback={inputMinCallback} inputValue={InputMin}
                                message={messageMin}/>
            </div>
            <Button title={'SET'} onClickCallback={onClickCallback} disabled={disableSetButton}/>
        </div>
    );
});