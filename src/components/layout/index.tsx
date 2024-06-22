import { ReactNode } from "react"
import LayoutNavigation from "./LayoutNavigation"
import './layout.css'

type ComponentLayoutProps = {
    children: ReactNode
}

const ComponentLayout = ({ children }: ComponentLayoutProps) => {
    return (
        <div className='app-layout'>
            <LayoutNavigation menu={[
                { id: "dashboard", label: "Dashboard" },
                { id: "setting", label: "Setting" },
            ]} title={"Vehicle Management"} />
            <div className="app-layout-container">
                {children}
            </div>
        </div>
    )
}

export default ComponentLayout