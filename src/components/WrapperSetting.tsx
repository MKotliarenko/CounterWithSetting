import React, {useState} from 'react';
import {Button} from "./Button";
import {InputUniversal} from "./InputUniversal";

type WrapperSettingPropsType ={
    StartNumber:()=>void
    setValueInputMin:(min:number)=>void
    setValueInputMax:(max:number)=>void
    valueInputMax:number
    valueInputMin:number

}
export const WrapperSetting:React.FC<WrapperSettingPropsType> = ({StartNumber,setValueInputMin,setValueInputMax,valueInputMax,valueInputMin}) => {


    const onClickHandler = () => {
        StartNumber()
    }

    return (
        <div className={'Wrapper'}>
            <div className={'InputWrapper'}>
                <InputUniversal  title={'Max value:'} setValueInput={setValueInputMax} valueInput={valueInputMax} />
                <InputUniversal  title={'Start value:'} setValueInput={setValueInputMin} valueInput={valueInputMin} />
            </div>
            <Button title={'SET'} onClickHandler={onClickHandler} disabled={false}/>
        </div>
    );
};