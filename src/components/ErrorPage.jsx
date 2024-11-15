import React from 'react';
import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className={"flex justify-center items-center flex-col min-h-screen"}>
            <h1 className={"font-bold text-5xl"}>Ooopps!</h1>
            <p>Most likely the page you are searching not available</p>

            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;