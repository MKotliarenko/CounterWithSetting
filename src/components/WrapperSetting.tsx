import React, {useEffect, useState} from 'react';
import {Button} from "./Button";
import {InputUniversal} from "./InputUniversal";

type WrapperSettingPropsType = {
    setValueInputMin: (min: number) => void
    setValueInputMax: (max: number) => void
    valueInputMax: number
    valueInputMin: number
    setNum: (num: number) => void
    InputMin: number
    InputMax: number
    setInputMin: (min: number) => void
    setInputMax: (max: number) => void
    messageMax: boolean
    messageMin: boolean


}
export const WrapperSetting: React.FC<WrapperSettingPropsType> = (
    {
        setValueInputMin,
        setValueInputMax,
        valueInputMax,
        valueInputMin, setNum,
        InputMin, InputMax,
        setInputMin, setInputMax, messageMax,
        messageMin
    }) => {

    const disableSetButton = valueInputMin === InputMin && valueInputMax === InputMax || messageMin || messageMax

    const onClickCallback = () => {
        setValueInputMax(InputMax)
        setValueInputMin(InputMin)
        setNum(InputMin)
    }

    return (
        <div className={'Wrapper'}>
            <div className={'InputWrapper'}>
                <span className={'span'}>Max value:</span>
                <InputUniversal  setValueInput={setInputMax} inputValue={InputMax}
                                message={messageMax}/>

                <span className={'span'}>Start value:</span>
                <InputUniversal setValueInput={setInputMin} inputValue={InputMin}
                                message={messageMin}/>
            </div>
            <Button title={'SET'} onClickCallback={onClickCallback} disabled={disableSetButton}/>
        </div>
    );
};