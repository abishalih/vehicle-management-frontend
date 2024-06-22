import "./table.css";
import TableHeader from "./TableHeader";

type TableColumnProps = {
    id: string;
    label: string;
}

type ComponentTableProps = {
    columns: TableColumnProps[];
    dataSource: any[];
}

const ComponentTable = ({
    columns,
    dataSource
}: ComponentTableProps) => {
    return (
        <div className="component-table">
            <TableHeader />
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        {columns.map(({ label }) => (
                            <th>{label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataSource.map((data, key) => (
                        <tr key={key}>
                            <td align="center">{key + 1}</td>
                            {columns.map(({ id }) => (
                                <td align="center">{data[id]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>Pagination</div>
        </div>
    )
}

export default ComponentTable