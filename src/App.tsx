import React, { SetStateAction, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './index.css';
import Button from './components/Button';
import Dropdown from './components/Dropdown';
import Table from './components/Table';
// import Station from './components/Station';
// import Stations from './components/Stations';

export interface JourneyRow {
    departureTime: Date;
    arrivalTime: Date;
    status: string;
}

export interface JourneyRowFormatted {
    departureTime: string;
    arrivalTime: string;
    status: string;
}

const App = () => {
    // State to hold the selected value from the child component
    const [fromStation, setFromStation] = useState('');
    
    // Callback function to receive the selected value from the child component
    const handleFromStation = (value: React.SetStateAction<string>) => {
        setFromStation(value);
    };
    
    // State to hold the selected value from the child component
    const [toStation, setToStation] = useState('');
    
    // Callback function to receive the selected value from the child component
    const handleToStation = (value: React.SetStateAction<string>) => {
        setToStation(value);
    };

    // State to hold the selected value from the child component
    const [journeyDB, setJourneyDB] = useState<JourneyRowFormatted[]>([]);

    // Callback function to receive the selected value from the child component
    const handleJourneyDB = (value: JourneyRowFormatted[]) => {
        setJourneyDB(value);
    };

    return (
        <BrowserRouter>
            <div className = "App">
                <h1 className = 'header-title'> trainBoard Exercise </h1>
                <div className = 'outer-container'>
                    <div className = 'inner-container'>
                        <h3 className = 'departure-title'> Departure Station: </h3>
                        <Dropdown onValueChange = { handleFromStation }/>
                    </div>
                    <div className = 'inner-container'>
                        <h3 className = 'arrival-title'> Arrival Station: </h3>
                        <Dropdown onValueChange = { handleToStation }/>
                    </div>
                </div>
                <div className = 'button-container'> 
                    <Button fromStation = { fromStation } toStation = { toStation } onValueChange = { handleJourneyDB }/>
                </div>
                <Table outboundJourneyDB = { journeyDB } />
            </div>
        </BrowserRouter>
    );
};

export default App;