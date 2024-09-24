import React from 'react';
import { JourneyRow } from '../App';

interface ButtonProps {
    toStation: string;
    fromStation: string;
    onValueChange (value: Array<JourneyRow>): void;
}

const Button: React.FC<ButtonProps> = (buttonProps) => {
    // Handle the click event
    const handleClick = () => {

        // Full URL with search parameters
        const searchUrl = `https://mobile-api-softwire2.lner.co.uk/v1/fares?originStation=${buttonProps.fromStation}&destinationStation=${buttonProps.toStation}&outboundDateTime=${new Date().toISOString()}&numberOfChildren=0&numberOfAdults=1`;

        // Perform the GET request using fetch
        fetch(searchUrl, {
            method: 'GET',
            headers: {
                'x-api-key': `${process.env.REACT_APP_X_API_KEY}`,
            },
        })
            .then(response => response.json())  // Assuming the response is in JSON format
            .then(data => {
                console.log('Search results:', data);
                buttonProps.onValueChange(data.outboundJourneys);
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
            });

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