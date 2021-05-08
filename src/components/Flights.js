import React from 'react';
import '../styles/Flights.scss';

const Flight = (props) => {
    return (
        <div className="flight" key={props.key}>
            <h2>PLN {props.price}</h2>
            <button className="btn_buy">Buy ticket!</button>
        </div>
    )
}

function Flights(props) { 
    return(
        <div className="flights">
            {props.flights ? props.flights.map(flight => {
                return (
                    <Flight 
                        key={flight.QuoteId}
                        price={flight.MinPrice}
                    />
                )
            }) : <h2 className="flights__no-results">Sorry, we found no flights. Change your search criteria, please.</h2>}
         </div>
    )
}

export default Flights;