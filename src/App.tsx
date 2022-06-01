import React, {useEffect, useState} from 'react';
import './App.css';
import {WrapperCounter} from './components/WrapperCounter';
import {WrapperSetting} from "./components/WrapperSetting";


function App() {
    console.log('App')
    const [num, setNum] = useState(0)
    const [valueInputMin, setValueInputMin] = useState<number>(0)
    const [valueInputMax, setValueInputMax] = useState<number>(5)
    const [InputMin, setInputMin] = useState<number>(0)
    const [InputMax, setInputMax] = useState<number>(5)

    let messageMax = InputMax <= InputMin || InputMax < 0
    let messageMin = InputMin >= InputMax || InputMin < 0
    let errorMessage = InputMax <= InputMin || InputMax < 0 || InputMin < 0
    let disabledButtonInc = num === valueInputMax
    let disabledButtonReset = num === valueInputMin
    let ChangesMessage: boolean = InputMin !== valueInputMin || InputMax !== valueInputMax


    useEffect(() => {
        let maxValue = localStorage.getItem('maxValue')
        console.log('max', maxValue)
        if (maxValue) {
            let newMaxValue = JSON.parse(maxValue)
            setValueInputMax(newMaxValue)
            setInputMax(newMaxValue)
        }
    }, [])

    useEffect(() => {
        let minValue = localStorage.getItem('minValue')
        console.log('min', minValue)
        if (minValue) {
            let newMinValue = JSON.parse(minValue)
            setValueInputMin(newMinValue)
            setInputMin(newMinValue)
            setNum(newMinValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(valueInputMax))
    }, [valueInputMax])

    useEffect(() => {
        localStorage.setItem('minValue', JSON.stringify(valueInputMin))
    }, [valueInputMin])


    const incCallback = () => {
        let newNum: number = num === valueInputMax ? num : num + 1
        setNum(newNum)
    }
    const resetCallback = () => {
        setNum(valueInputMin)
    }

    return (
        <div>
            <WrapperSetting setValueInputMin={setValueInputMin}
                            setValueInputMax={setValueInputMax}
                            valueInputMax={valueInputMax}
                            valueInputMin={valueInputMin}
                            setNum={setNum}
                            InputMin={InputMin}
                            InputMax={InputMax}
                            setInputMin={setInputMin}
                            setInputMax={setInputMax}
                            messageMax={messageMax}
                            messageMin={messageMin}/>
            <WrapperCounter num={num}
                            incCallback={incCallback}
                            resetCallback={resetCallback}
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
