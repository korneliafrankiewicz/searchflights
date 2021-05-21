import React from 'react';
import "./Footer.scss";
import EmailIcon from "../../images/email.png";
import MoreIcon from "../../images/more.png";
import PlaceholderIcon from "../../images/placeholder.png";
import TelephoneIcon from "../../images/telephone.png";
import ImportantIcon from "../../images/important.png";

const Footer = () => {
    return (
        <div className="footer">
            <a className="footer-icon" href="#"><img src={EmailIcon} width="50px" alt="email"/></a>
            <a className="footer-icon" href="#"><img src={TelephoneIcon} width="50px" alt="telephone"/></a>
            <a className="footer-icon" href="#"><img src={PlaceholderIcon} width="50px" alt="placeholder"/></a>
            <a className="footer-icon" href="#"><img src={ImportantIcon} width="50px" alt="important"/></a>
            <a className="footer-icon" href="#"><img src={MoreIcon} width="50px" alt="more"/></a>
        </div>
    )
}

export default Footer;