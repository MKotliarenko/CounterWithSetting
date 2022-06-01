import React, {ChangeEvent, ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type InputUniversalPropsType = Omit<DefaultInputPropsType, 'type'> & {
    setValueInput: (num: number) => void
    inputValue: number
    message: boolean

}

export const InputUniversal: React.FC<InputUniversalPropsType> = ({
                                                                       setValueInput, inputValue,
                                                                      message, ...restProps
                                                                  }) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(JSON.parse(e.currentTarget.value))
    }
    const InputClassName = message ? 'InputError' : 'InputUniversal'

    return (
        <>
            <input value={inputValue} className={InputClassName} type={"number"} onChange={onChangeInputHandler}>
            </input>
        </>
    );
};

