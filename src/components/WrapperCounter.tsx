import React from 'react';
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

export const WrapperCounter: React.FC<WrapperCounterPropsType> = (
    {
        num,
        disabledButtonReset, disabledButtonInc,
        valueInputMax, valueInputMin,
        ChangesMessage,errorMessage
    }
) => {

    const dispatch = useDispatch();


    const onClickCallbackInc = () => {
        let newNum: number = num === valueInputMax ? num : num + 1
        dispatch(setNewValueAC(newNum))
    }
    const onClickCallbackReset = () => {
        dispatch(setNewValueAC(valueInputMin))
    }

    return (
        <div className={'Wrapper'}>
            <Display num={num} valueInputMax={valueInputMax} errorMessage={errorMessage} ChangesMessage={ChangesMessage}/>
            <Button title={'INC'} onClickCallback={onClickCallbackInc} disabled={disabledButtonInc}/>
            <Button title={'RESET'} onClickCallback={onClickCallbackReset} disabled={disabledButtonReset}/>
        </div>
    );
};

