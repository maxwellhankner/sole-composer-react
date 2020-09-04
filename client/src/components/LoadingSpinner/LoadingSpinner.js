import React from 'react';
import './LoadingSpinner.css';


function LoadingSpinner({isLoading}) {

    if (isLoading) {
        return (
            <div id="loading-screen">
                <div id="loader"></div>
            </div>
        )
    }
    else {
        return null;
    }

}
export default LoadingSpinner;