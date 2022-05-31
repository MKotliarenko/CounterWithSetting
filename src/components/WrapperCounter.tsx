import React, {useState} from 'react';
import {Display} from "./Display";
import {Button} from "./Button";

type WrapperCounterPropsType = {
    num: number
    incCallback: () => void
    resetCallback: () => void
    disabledButtonInc: boolean
    disabledButtonReset: boolean
    valueInputMax: number
    valueInputMin: number
    ChangesMessage:boolean

}

export const WrapperCounter: React.FC<WrapperCounterPropsType> = (
    {
        num, incCallback, resetCallback,
        disabledButtonReset, disabledButtonInc,
        valueInputMax, valueInputMin,
        ChangesMessage
    }
) => {


    const onClickCallbackInc = () => {
        incCallback()
    }
    const onClickCallbackReset = () => {
        resetCallback()
    }
    let errorMessage = valueInputMax <= valueInputMin || valueInputMax < 0 || valueInputMin < 0


    return (
        <div className={'Wrapper'}>
            <Display num={num} valueInputMax={valueInputMax} errorMessage={errorMessage} ChangesMessage={ChangesMessage}/>
            <Button title={'INC'} onClickCallback={onClickCallbackInc} disabled={disabledButtonInc}/>
            <Button title={'RESET'} onClickCallback={onClickCallbackReset} disabled={disabledButtonReset}/>
        </div>
    );
};

