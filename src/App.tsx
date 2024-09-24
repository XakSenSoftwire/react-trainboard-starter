import React, { SetStateAction, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
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
    const [journeyDB, setJourneyDB] = useState<JourneyRow[]>([]);

    // Callback function to receive the selected value from the child component
    const handleJourneyDB = (value: Array<JourneyRow>) => {
        setJourneyDB(value);
    };

    return (
        <BrowserRouter>
            <div className = "App">
                <Dropdown onValueChange = { handleFromStation }/>
                <Dropdown onValueChange = { handleToStation }/>
                <Button fromStation = { fromStation } toStation = { toStation } onValueChange = { handleJourneyDB }/>
                <Table outboundJourneyDB = { journeyDB } />
            </div>
        </BrowserRouter>
    );
};

export default App;