import './TableHeader.scss'
import TableHeaderAction from './TableHeaderAction'
import TableHeaderFilter from './TableHeaderFilter'
type TableHeaderProps = {}

const TableHeader = (props: TableHeaderProps) => {
    return (
        <div className="table-header">
            <TableHeaderFilter
                onSearch={() => console.log()}
                onSelectSearchBy={() => console.log()}
                searchByOptions={[]}
            />
            <TableHeaderAction />
        </div>
    )
}

export default TableHeader