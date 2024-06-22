import React, { ReactNode } from 'react';
import './LayoutNavigation.scss';

interface LayoutNavigationProps {
  children?: ReactNode;
  menu: { id: string; label: string }[];
  title?: string;
}

const LayoutNavigation: React.FC<LayoutNavigationProps> = ({ children, menu, title }) => {
  const handleClick = (id: string) => {
    console.log(id);
    // Add navigation logic as needed
  };

  return (
    <div className="layout-navigation">
      <div className="app-title">{title}</div>
      <div className="menu-buttons">
        {menu.map(item => (
          <button key={item.id} onClick={() => handleClick(item.id)} className="navigation-button">
            {item.label}
          </button>
        ))}
      </div>
      {children}
    </div>
  );
}

export default LayoutNavigation;
