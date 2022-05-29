import React from 'react';

type DisplayPropsType ={
    num:number
    valueInputMax:number
}

export const Display:React.FC<DisplayPropsType> = ({num,valueInputMax}) => {
    return (
        <div className= {num===valueInputMax? 'red': 'Display'}>
            {num}
        </div>
    );
};

