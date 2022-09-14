import React, {useCallback} from 'react';
import {Display} from "./Display";
import {Button} from "./Button";
import {setNewValueAC} from "../state/counterNumber-reducer";
import {useDispatch} from "react-redux";

type WrapperCounterPropsType = {
    num: number
    disabledButtonInc: boolean
    disabledButtonReset: boolean
    valueInputMax: number
    valueInputMin: number
    ChangesMessage:boolean
    errorMessage:boolean

}

export const WrapperCounter: React.FC<WrapperCounterPropsType> = React.memo((
    {
        num,
        disabledButtonReset, disabledButtonInc,
        valueInputMax, valueInputMin,
        ChangesMessage,errorMessage
    }
) => {
    console.log("wraperCounter")

    const dispatch = useDispatch();


    const onClickCallbackInc = useCallback(() => {
        let newNum: number = num === valueInputMax ? num : num + 1
        dispatch(setNewValueAC(newNum))
    },[dispatch,num])
    const onClickCallbackReset = useCallback(() => {
        dispatch(setNewValueAC(valueInputMin))
    },[dispatch,valueInputMin])

    return (
        <div className={'Wrapper'}>
            <Display num={num} valueInputMax={valueInputMax} errorMessage={errorMessage} ChangesMessage={ChangesMessage}/>
            <Button title={'INC'} onClickCallback={onClickCallbackInc} disabled={disabledButtonInc}/>
            <Button title={'RESET'} onClickCallback={onClickCallbackReset} disabled={disabledButtonReset}/>
        </div>
    );
});

