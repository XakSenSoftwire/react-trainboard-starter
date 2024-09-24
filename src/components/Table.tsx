import React from 'react';
import { JourneyRow } from '../App';

interface TableProps {
    outboundJourneyDB: Array<JourneyRow>;
}

const Table: React.FC<TableProps> = (tableProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Departure Time</th>
                    <th>Arrival Time</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {tableProps.outboundJourneyDB.map((journey, journeyIndex) => (
                    <tr key = { journeyIndex }>
                        <td>{journey.departureTime.toTimeString()}</td>
                        <td>{journey.arrivalTime.toTimeString()}</td>
                        <td>{journey.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;