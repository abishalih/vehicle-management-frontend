import { ReactNode } from "react"
import LayoutNavigation from "./LayoutNavigation"
import './layout.css'

type ComponentLayoutProps = {
    children: ReactNode
}

const ComponentLayout = ({ children }: ComponentLayoutProps) => {
    return (
        <div className='app-layout'>
            <LayoutNavigation />
            <div className="app-layout-container">
                {children}
            </div>
        </div>
    )
}

export default ComponentLayout