import React, {useState} from 'react';
import './Flights.scss';
import moment from 'moment';
import MoneyImg from "../../images/money.png";
import CartImg from "../../images/shopping-cart.png"

const Flight = (props) => {
    
    const [cart, setCart] = useState([]);
    const handleAddtoCart = () => {
        setCart(prev => [...prev, cart]);
    }

    return (
        <div className="flight" key={props.key}>
            <h2>USD {props.price}</h2>
            <h4>{moment(props.date).utc().format('LT')}</h4>
            <div className="cart-wrapper">
                <img id="cart" src={CartImg} width="50px" alt="cart"/>
                <h3>{cart.length}</h3>
            </div>
            <div className="cart-wrapper">
                <img id="money" src={MoneyImg} width="50px" alt="money"/>
                <h3>{cart.length * props.price} $</h3>
            </div> 
                <button className="btn_buy" onClick={handleAddtoCart}>
                   +
                </button>
          
        </div>

    )
}

function Flights(props) {   
    if (props.flights.length > 0){
        return(
            <>
            <div className="flights">
                {props.flights.map(flight => {
                    return (
                        <>
                        <Flight 
                            key={flight.QuoteId}
                            price={flight.MinPrice}
                            date={flight.QuoteDateTime}
                
                        />
                        </>
                    )
                }) }
             </div>
             </>
        )
    }
    else {
        return(
            <div className="flights">
                 <h2 className="flights__no-results">Sorry, we found no flights. Change your search criteria, please.</h2>
             </div>
        )
    }

}

export default Flights;