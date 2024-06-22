import './TableFooter.scss'
import TableFooterPagination from './TableFooterPagination'
type TableFooterProps = {}

const TableFooter = (props: TableFooterProps) => {
    return (
        <div className="table-footer">
            <div />
            <TableFooterPagination />
        </div>
    )
}

export default TableFooter