
import { Outlet } from "react-router-dom";

export function Menu() {
    return(
        <>
        <Outlet/>
        <div id="yuvarlak">
        <span className="carpi"></span>
        <div id="icerik">
            <a className="icon" href="/"><span className="fa fa-home a"></span></a> 
            <a className="icon" href="/work"><span className="fa fa-briefcase b"></span></a>
            <a className="icon" href="/about"><span className="fa fa-circle-info c"></span></a>
            <a className="icon" href="#"><span className="fa fa-share d"></span></a>
        </div>
    </div>
    </>
    );
}