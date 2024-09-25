import React from 'react';
import './styles.css';
import { JourneyRowFormatted } from '../App';

interface TableProps {
    outboundJourneyDB: JourneyRowFormatted[];
}

const Table: React.FC<TableProps> = (tableProps) => {
    return (
        <table className = 'table-style'>
            <thead>
                <tr>
                    <th>Train Number</th>
                    <th>Departure Time</th>
                    <th>Arrival Time</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {tableProps.outboundJourneyDB.map((journey, journeyIndex) => (
                    <tr key = { journeyIndex }>
                        <td>{journeyIndex}</td>
                        <td>{journey.departureTime}</td>
                        <td>{journey.arrivalTime}</td>
                        <td>{journey.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;