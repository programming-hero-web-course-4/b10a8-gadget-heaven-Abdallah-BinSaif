import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className={"text-center"}>
            <h3 className={"font-semibold text-3xl"}>{title}</h3>
            <p className={"font-light"}>{subtitle}</p>
        </div>
    );
};

export default Heading;