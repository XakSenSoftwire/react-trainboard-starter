import React from 'react';
import './styles.css';
import { JourneyRow } from '../App';
import { JourneyRowFormatted } from '../App';

interface ButtonProps {
    toStation: string;
    fromStation: string;
    onValueChange (value: object[]): void;
}

const Button: React.FC<ButtonProps> = (buttonProps) => {
    // Handle the click event
    const handleClick = () => {

        const dataFormatted: JourneyRowFormatted[] = [];

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
                const journeyObj = data.outboundJourneys as JourneyRowFormatted[];
                journeyObj.map(journey => {
                    const journeyRowFormatted: JourneyRowFormatted = {
                        departureTime: new Date (journey.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 
                        arrivalTime: new Date (journey.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        status: journey.status,
                    };
                    dataFormatted.push(journeyRowFormatted);
                });
                buttonProps.onValueChange(dataFormatted);
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
            });

    };

    return (
        <button className = 'button-style' onClick = { handleClick }> 
            Submit
        </button>
    );
};

export default Button;