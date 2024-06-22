import { ReactNode } from 'react';
import './card.css';

type CardProps = {
    children: ReactNode;
    title?: string;
}

const ComponentCard = ({ children, title }: CardProps) => {
    return (
        <div className="component-card">
            {title && <div className="card-title">{title}</div>}
            <div className="card-container">
                {children}
            </div>
        </div>
    );
}

export default ComponentCard;
