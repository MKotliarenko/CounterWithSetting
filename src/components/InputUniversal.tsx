import React, {ChangeEvent, ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputUniversalPropsType= Omit<DefaultInputPropsType, 'type'> & {
    title:string
    setValueInput:(num:number)=>void
    valueInput:number

}

export const InputUniversal:React.FC<InputUniversalPropsType> = ({title, setValueInput,valueInput, ...restProps}) => {
    
    const onChangeInputHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setValueInput(parseInt(e.currentTarget.value))
    }

    return (
        <div>
            <span  className={'span'}>{title}</span>
            <input value={valueInput}  className={'InputUniversal'} type={"number"} onChange={onChangeInputHandler}>
            </input>
        </div>
    );
};

