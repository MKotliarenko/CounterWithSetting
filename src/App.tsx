import React from 'react';
import './App.css';
import {WrapperCounter} from './components/WrapperCounter';
import {WrapperSetting} from "./components/WrapperSetting";
import {useSelector} from "react-redux";
import {RootState} from "./store/store";


function App() {

    console.log("APP")
    const InputMax = useSelector<RootState, number>(state=>state.Setting.InputMax)
    const InputMin = useSelector<RootState, number>(state=>state.Setting.InputMin)
    const num = useSelector<RootState, number> (state=>state.CounterNumber.num)
    const valueInputMax = useSelector<RootState,number>(state=>state.Setting.valueInputMax)
    const valueInputMin = useSelector<RootState,number>(state=>state.Setting.valueInputMin)


    let messageMax: boolean = InputMax <= InputMin || InputMax < 0
    let messageMin: boolean = InputMin >= InputMax || InputMin < 0
    let errorMessage: boolean = InputMax <= InputMin || InputMax < 0 || InputMin < 0
    let disabledButtonInc: boolean = num === valueInputMax || errorMessage
    let disabledButtonReset: boolean = num === valueInputMin
    let ChangesMessage: boolean = InputMin !== valueInputMin || InputMax !== valueInputMax

    // useEffect(() => {
    //     let maxValue = localStorage.getItem('maxValue')
    //     console.log('max', maxValue)
    //     if (maxValue) {
    //         let newMaxValue = JSON.parse(maxValue)
    //         setValueInputMax(newMaxValue)
    //         setInputMax(newMaxValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     let minValue = localStorage.getItem('minValue')
    //     console.log('min', minValue)
    //     if (minValue) {
    //         let newMinValue = JSON.parse(minValue)
    //         setValueInputMin(newMinValue)
    //         setInputMin(newMinValue)
    //         setNum(newMinValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(valueInputMax))
    // }, [valueInputMax])
    //
    // useEffect(() => {
    //     localStorage.setItem('minValue', JSON.stringify(valueInputMin))
    // }, [valueInputMin])


    return (
        <div className={'App'} >
            <WrapperSetting
                            valueInputMax={valueInputMax}
                            valueInputMin={valueInputMin}
                            InputMin={InputMin}
                            InputMax={InputMax}
                            messageMax={messageMax}
                            messageMin={messageMin}/>
            <WrapperCounter num={num}
                            disabledButtonInc={disabledButtonInc}
                            disabledButtonReset={disabledButtonReset}
                            valueInputMax={valueInputMax}
                            valueInputMin={valueInputMin}
                            ChangesMessage={ChangesMessage}
                            errorMessage={errorMessage}/>
        </div>
    );
}

export default App;
