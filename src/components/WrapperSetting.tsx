import React, {useState} from 'react';
import {Button} from "./Button";
import {InputUniversal} from "./InputUniversal";

type WrapperSettingPropsType = {
    setValueInputMin: (min: number) => void
    setValueInputMax: (max: number) => void
    valueInputMax: number
    valueInputMin: number
    setNum:(num:number)=>void


}
export const WrapperSetting: React.FC<WrapperSettingPropsType> = ({setValueInputMin,
                                                                      setValueInputMax,
                                                                      valueInputMax,
                                                                      valueInputMin,setNum
                                                                  }) => {
    let [InputMin, setInputMin] = useState<number>(0)
    let [InputMax, setInputMax] = useState<number>(5)

    const disableSetButton = valueInputMin===InputMin && valueInputMax===InputMax
    let messageMax=InputMax<InputMin||InputMax<0
    let messageMin=InputMin>InputMax||InputMin<0


    const onClickCallback = () => {
        setValueInputMax(InputMax)
        setValueInputMin(InputMin)
        setNum(InputMin)
    }

    return (
        <div className={'Wrapper'}>
            <div className={'InputWrapper'}>
                <InputUniversal title={'Max value:'} setValueInput={setInputMax} inputValue={InputMax} message={messageMax}/>
                <InputUniversal title={'Start value:'} setValueInput={setInputMin} inputValue={InputMin} message={messageMin}/>
            </div>
            <Button title={'SET'} onClickCallback={onClickCallback} disabled={disableSetButton}/>
        </div>
    );
};