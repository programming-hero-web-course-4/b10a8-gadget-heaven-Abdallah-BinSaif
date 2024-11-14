import React from 'react';

const Button = ({children, onclick}) => {
    return (
        <button onClick={()=>onclick()} className={"btn rounded-full border-primary text-primary"}>{children}</button>
    );
};

export default Button;