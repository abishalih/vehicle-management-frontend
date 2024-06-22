import './TableHeader.css'
import TableHeaderAction from './TableHeaderAction'
type TableHeaderProps = {}

const TableHeader = (props: TableHeaderProps) => {
    return (
        <div className="table-header">
            <div>Filters</div>
            <TableHeaderAction />
        </div>
    )
}

export default TableHeader