import React from 'react';
import TableFooter from './TableFooter';
import TableHeader from './TableHeader';
import './table.scss';

interface TableColumnProps {
    id: string;
    label: string;
}

interface ComponentTableProps {
    columns: TableColumnProps[];
    dataSource: any[];
}

const ComponentTable: React.FC<ComponentTableProps> = ({ columns, dataSource }) => {
    return (
        <div className="component-table">
            <TableHeader />
            <table className="data-table">
                <thead>
                    <tr>
                        <th>#</th>
                        {columns.map(({ id, label }) => (
                            <th key={id}>{label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataSource.map((data, index) => (
                        <tr key={index}>
                            <td align="center">{index + 1}</td>
                            {columns.map(({ id }) => (
                                <td key={id} align="center">{data[id]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <TableFooter />
        </div>
    );
};

export default ComponentTable;
