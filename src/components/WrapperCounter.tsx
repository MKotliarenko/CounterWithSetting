import React, {useState} from 'react';
import {Display} from "./Display";
import {Button} from "./Button";

type WrapperCounterPropsType = {
    num: number
    incCallback: () => void
    resetCallback: () => void
    disabledButtonInc: boolean
    disabledButtonReset: boolean
    valueInputMax:number
}

export const WrapperCounter: React.FC<WrapperCounterPropsType> = (
    {num, incCallback, resetCallback, disabledButtonReset, disabledButtonInc,valueInputMax}
) => {


    const onClickHandlerInc = () => {
        incCallback()
    }
    const onClickHandlerReset = () => {
        resetCallback()
    }


    return (
        <div className={'Wrapper'}>
            <Display num={num} valueInputMax={valueInputMax}/>
            <Button title={'INC'} onClickHandler={onClickHandlerInc} disabled={disabledButtonInc}/>
            <Button title={'RESET'} onClickHandler={onClickHandlerReset} disabled={disabledButtonReset}/>
        </div>
    );
};

