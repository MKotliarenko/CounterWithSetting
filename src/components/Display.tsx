import React from 'react';

type DisplayPropsType = {
    num: number
    valueInputMax: number
    errorMessage: boolean
    ChangesMessage: boolean
}

export const Display: React.FC<DisplayPropsType> = ({num, valueInputMax, errorMessage, ChangesMessage}) => {
    let finalClassName: string = ''
    let displayShou

    if (errorMessage) {
        finalClassName = 'errorMessage'
        displayShou = "Incorrect value!"
    } else if (num === valueInputMax) {
        finalClassName = 'red'
        displayShou = num
    } else if (ChangesMessage) {
        finalClassName = 'ChangesMessage'
        displayShou = "Enter values and press 'set'"
    } else {
        finalClassName = 'Display'
        displayShou = num
    }
    return (
        <div className={finalClassName}>
            {displayShou}
        </div>
    );
};

