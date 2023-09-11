import "../assets/style/menu/Float.css";
import { Outlet } from "react-router-dom";

export function MenuFloat() {
    return (
        <>
            < Outlet />
            <div className="fab-wrapper">
                <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
                <label className="fab" htmlFor="fabCheckbox">
                    <span className="fab-dots fab-dots-1"></span>
                    <span className="fab-dots fab-dots-2"></span>
                    <span className="fab-dots fab-dots-3"></span>
                </label>
                <div className="fab-wheel">
                    <a title="Resume" href="/resume" className="fab-action fab-action-1"> 
                       <i> <img alt="Resume" className="img img-4" srcSet="4-transparent.png" /></i> 
                    </a>
                    <a title="Budgets" href="budgets" className="fab-action fab-action-2">
                       <i> <img title="Budgets" className="img" srcSet="3-transparent.png"/></i> 
                    </a>
                    <a title="Contacts" href="contacts" className="fab-action fab-action-3">
                       <i> <img alt="Contacts" className="img img-1" srcSet="1-transparent.png" /></i>
                    </a>
                    <a title="Projects" href="projects" className="fab-action fab-action-4">
                       <i> <img alt="Projects" className="img img-2" srcSet="2-transparent.png" /></i> 
                    </a>
                </div>
            </div>
        </>
    );
}