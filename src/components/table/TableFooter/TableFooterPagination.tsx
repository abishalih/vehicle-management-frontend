import React from 'react';
import './TableFooterPagination.scss';

interface TableFooterPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

const TableFooterPagination: React.FC<TableFooterPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const goToPage = (pageNumber: number) => {
        if (pageNumber !== currentPage) {
            onPageChange(pageNumber);
        }
    };

    return (
        <div className="table-footer-pagination">
            <button disabled={isFirstPage} onClick={() => goToPage(currentPage - 1)}>
                Previous
            </button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <button disabled={isLastPage} onClick={() => goToPage(currentPage + 1)}>
                Next
            </button>
        </div>
    );
};

export default TableFooterPagination;
