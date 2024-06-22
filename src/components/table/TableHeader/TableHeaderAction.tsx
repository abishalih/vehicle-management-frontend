import './TableHeaderAction.scss';

type TableHeaderActionProps = {
    onExport: () => void; // Function to handle export action
    onCustomAction: () => void; // Function to handle custom action
};

const TableHeaderAction = ({ onExport, onCustomAction }: TableHeaderActionProps) => {
    const handleExport = () => {
        onExport();
    };

    const handleCustomAction = () => {
        onCustomAction();
    };

    return (
        <div className='table-header-action'>
            <div></div>
            <div>
                <button className='action-button export-button' onClick={handleExport}>
                    Export Data
                </button>
                <button className='action-button' onClick={handleCustomAction}>
                    Custom Action
                </button>
            </div>
        </div>
    );
};

export default TableHeaderAction;

