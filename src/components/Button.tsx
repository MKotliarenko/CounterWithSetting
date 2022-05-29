import React from 'react';

type ButtonPropsType={
    title:string
    onClickHandler:()=>void
    disabled:boolean
}


 export const Button:React.FC<ButtonPropsType> = ({title,onClickHandler,disabled}) => {


    return (
        <>
            <button className={'Button'} onClick={onClickHandler} disabled={disabled}>
                {title}
            </button>
        </>
    );
};

