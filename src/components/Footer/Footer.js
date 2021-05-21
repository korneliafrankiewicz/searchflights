import React from 'react';
import "./Footer.scss";
import EmailIcon from "../../images/email.png";
import MoreIcon from "../../images/more.png";
import PlaceholderIcon from "../../images/placeholder.png";
import TelephoneIcon from "../../images/telephone.png";
import ImportantIcon from "../../images/important.png";

const Footer = () => {
    return (
        <footer className="footer">
            <a className="footer-icon" href="#"><img src={EmailIcon}  alt="email"/></a>
            <a className="footer-icon" href="#"><img src={TelephoneIcon} alt="telephone"/></a>
            <a className="footer-icon" href="#"><img src={PlaceholderIcon}  alt="placeholder"/></a>
            <a className="footer-icon" href="#"><img src={ImportantIcon}  alt="important"/></a>
            <a className="footer-icon" href="#"><img src={MoreIcon} alt="more"/></a>
        </footer>
    )
}

export default Footer;