import React, { SetStateAction, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Button from './components/Button';
import Dropdown from './components/Dropdown';
// import Station from './components/Station';
// import Stations from './components/Stations';

const App = () => {
    // State to hold the selected value from the child component
    const [fromStation, setFromStation] = useState('');
    
    // Callback function to receive the selected value from the child component
    const handleFromStation = (value: React.SetStateAction<string>) => {
        setFromStation(value);
        console.log('Selected value in parent:', value);
    };
    
    // State to hold the selected value from the child component
    const [toStation, setToStation] = useState('');
    
    // Callback function to receive the selected value from the child component
    const handleToStation = (value: React.SetStateAction<string>) => {
        setToStation(value);
        console.log('Selected value in parent:', value);
    };
    return (
        <BrowserRouter>
            <div className = "App">
                <Dropdown onValueChange = { handleFromStation }/>
                <Dropdown onValueChange = { handleToStation }/>
                <Button fromStation = { fromStation } toStation = { toStation }/>
            </div>
        </BrowserRouter>
    );
};

export default App;