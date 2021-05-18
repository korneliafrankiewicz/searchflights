import React, {useState} from 'react';
import './Flights.scss';

const Flight = (props) => {
    const [cart, setCart] = useState([]);
    const handleAddToCart = () => {
        setCart(prevState => [...prevState, cart]);
        let sum = [];
        sum = sum.push(props.price);
        // const summary = sum.reduce(function(a, b){
        //     return a + b;
        // })
        const summary = 2 * parseInt(props.price);
    }
 


    return (
        <div className="flight" key={props.key}>
            <h2>PLN {props.price}</h2>
                <button className="btn_buy" onClick={() => handleAddToCart(props.price)}>
                    Add to cart!
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
                        <Flight 
                            key={flight.QuoteId}
                            price={flight.MinPrice}
                        />
                    )
                }) }
             </div>
             </>
        )
    } else {
        return(
            <div className="flights">
                 <h2 className="flights__no-results">Sorry, we found no flights. Change your search criteria, please.</h2>
             </div>
        )
    }

}

export default Flights;