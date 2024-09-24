import React, { useState } from 'react';

interface ButtonProps {
    toStation: string;
    fromStation: string;
}

const Button: React.FC<ButtonProps> = (buttonProps) => {
    // Handle the click event
    const handleClick = () => {
        // Do some search via URL
        window.open(`https://www.lner.co.uk/travel-information/travelling-now/live-train-times/depart/${buttonProps.fromStation}/${buttonProps.toStation}/#LiveDepResults`, '_blank', 'noopener,noreferrer');
    };

    return (
        <div>
            <h3>
                <button onClick = { handleClick }> 
                    Submit
                </button>
            </h3>
        </div>
    );
};

export default Button;