import React from 'react';
import './TableHeaderFilter.scss';

type Props = {
    searchByOptions: string[]; // Array of filter options for search criteria
    onSelectSearchBy: (option: string) => void; // Callback function to handle search criteria selection
    onSearch: (searchText: string) => void; // Callback function to handle search text input
};

const TableHeaderFilter = ({ searchByOptions, onSelectSearchBy, onSearch }: Props) => {
    const handleSearchByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSearchBy = event.target.value;
        onSelectSearchBy(selectedSearchBy);
    };

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        onSearch(value);
    };

    return (
        <div className="table-header-filter">
            <label htmlFor="searchBySelect">Search By:</label>
            <select id="searchBySelect" onChange={handleSearchByChange}>
                <option value="">Select an option</option>
                {searchByOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>

            <label htmlFor="searchInput">Search:</label>
            <input
                type="text"
                id="searchInput"
                onChange={handleSearchInputChange}
                placeholder="Enter search text"
            />
        </div>
    );
};

export default TableHeaderFilter;
