import React from 'react';

type ButtonPropsType = {
    title: string
    onClickCallback: () => void
    disabled: boolean
}


export const Button: React.FC<ButtonPropsType> = ({title, onClickCallback, disabled}) => {
    const onClickHandler =()=>{
        onClickCallback()
    }

    return (
        <>
            <button className={'Button'} onClick={onClickHandler} disabled={disabled}>
                {title}
            </button>
        </>
    );
};

