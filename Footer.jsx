import React from "react";
import ReactDOM from "react-dom";


function Footer()
{
    var year = new Date().getFullYear();
    return(<footer><p>CopyRight @ {year}</p></footer>);
}

export default Footer;