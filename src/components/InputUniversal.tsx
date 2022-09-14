import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type InputUniversalPropsType = Omit<DefaultInputPropsType, 'type'> & {
    ValueInputCallback: (num: number) => void
    inputValue: number
    message: boolean

}

export const InputUniversal: React.FC<InputUniversalPropsType> = ({
                                                                      ValueInputCallback, inputValue,
                                                                      message, ...restProps
                                                                  }) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        ValueInputCallback(+e.currentTarget.value)
        //ValueInputCallback(JSON.parse(e.currentTarget.value))    -   '+' macht string wie number
    }
    const InputClassName = message ? 'InputError' : 'InputUniversal'

    return (
        <>
            <input value={inputValue} className={InputClassName} type={"number"} onChange={onChangeInputHandler}>
            </input>
        </>
    );
};

