import React, {useState} from 'react';
import './App.css';
import {WrapperCounter} from './components/WrapperCounter';
import {WrapperSetting} from "./components/WrapperSetting";


function App() {

    let [num, setNum] = useState(0)
    let [valueInputMin, setValueInputMin] = useState<number>(0)
    let [valueInputMax, setValueInputMax] = useState<number>(5)
    let disabledButtonInc = num === valueInputMax
    let disabledButtonReset = num === valueInputMin


    const incCallback=()=>{
        let newNum: number = num === valueInputMax ? num : num + 1
        setNum(newNum)
    }
    const resetCallback=()=>{
        setNum(valueInputMin)
    }
    const StartNumber =()=>{
        setNum(valueInputMin)
    }


return (
    <div>
        <WrapperSetting StartNumber={StartNumber}
                        setValueInputMin={setValueInputMin}
                        setValueInputMax={setValueInputMax}
                        valueInputMax={valueInputMax}
                        valueInputMin={valueInputMin}
                        />
        <WrapperCounter num={num}
                        incCallback={incCallback}
                        resetCallback={resetCallback}
                        disabledButtonInc={disabledButtonInc}
                        disabledButtonReset={disabledButtonReset}
                        valueInputMax={valueInputMax}/>
    </div>
);
}

export default App;
