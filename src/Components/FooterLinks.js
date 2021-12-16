import React from "react";
import './Footer.css'
import './../../node_modules/bootstrap/dist/css/bootstrap.css'

function Footerlinks(props){
    const {heading,links} = props
    return(
        <div className="container">
         <div className="row">
        <nav>
            <ul>
            <li><h6 className="footer-heading text-muted">{heading}</h6></li>
                {links.map(link => <li><a className = "footerlinks" href={link.url}>{link.text}</a></li>)}
            </ul>
        </nav>
        </div>
        </div>
    )
}
export default Footerlinks;