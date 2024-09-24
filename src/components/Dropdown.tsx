import React, { useState } from 'react';

interface DropdownProps {
    onValueChange (value: string): void;
}

const Dropdown: React.FC<DropdownProps> = (dropdownProps) => {
    // State to hold the selected value
    const [station, setStation] = useState('');

    // Handle the change event
    const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setStation(value);
        dropdownProps.onValueChange(value);
    };

    return (
        <div>
            <h3>Choose an option:</h3>
            <select value = { station } onChange = { handleSelection }>
                <option value = "" disabled>Select an option</option>
                <option value = "WAT">Waterloo</option>
                <option value = "VXH">Vauxhall</option>
                <option value = "CLJ">Clapham Junction</option>
                <option value = "RMD">Richmond</option>
                <option value = "VIR">Virginia Water</option>
            </select>
        </div>
    );
};

export default Dropdown;

