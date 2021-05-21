import React, { useState} from 'react';
import './SearchBar.scss';
import "../../styles/App.scss"
import Flights from '../Flights/Flights';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



function SearchBar() { 
    const [originPlaces,setOriginPlaces] = useState([])
    const [destPlaces,setDestPlaces] = useState([])
    const [originValue, setOriginValue] = useState("")
    const [destValue, setDestValue] = useState("")


    // Daty z Datepickera
    const [outboundDate,setOutboundDate] = useState(new Date())
    const [inboundDate, setInboundDate] = useState(new Date())
    //Stanem domyślnym jest podróż w dwie strony
    const [showInboundInput, setShowInboundInput] = useState(false)

    const currency = "USD"

    const [flights, setFlights] = useState([])
    const [showFlights,setShowFlights] = useState(false)

        // Sort State Variables
        const [sortAsc, setSortAsc] = useState(true)
        const [sortType, setSortType] = useState([])
        const sortOptions = [
            { label: "Price: Low to High", value: "true" },
            { label: "Price: High to Low", value: "false" }
        ]
   

    const requestOptions = {
        method: 'GET',
        headers: {
            "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        }
    }

    function handleSubmit(e) {
        e.preventDefault() 

        /* Konwertowanie do formatu YYYY-MM-DD */
        function toString(date) {
            return date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? 
                '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + 
                date.getDate()
        }

        // InboundDate jest obiektem typu Data, dlatego zmienna pomocnicza localInboundDate 
        let localInboundDate
        if (showInboundInput){
            localInboundDate = toString(inboundDate)
        } else localInboundDate = "anytime"

        async function fetchFlights() {
            let response = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/${currency}/en-US/${originValue}/${destValue}/${toString(outboundDate)}/?` 
            + new URLSearchParams(localInboundDate.toString()), requestOptions)
            response = await response.json()
            // console.log(response)
            setFlights(response.Quotes)
            setSortType(sortOptions[0])
            setSortAsc(true)
        }
        fetchFlights()
        setShowFlights(true)
    }

    // Origin Handler Functions
    /* Ustawienie origin */
    const handleOriginChange = (option, actionMeta) => {
        actionMeta.action === "clear" ? setOriginValue("") : setOriginValue(option.PlaceId)
        getOriginOptions(option ? option.PlaceName : "")
    }
    
    function getOriginOptions(origin) {
        async function fetchOrigins() {
            try {        
                let response = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/${currency}/en-US/?` + new URLSearchParams({query: origin }), requestOptions)
                response = await response.json()
                // console.log(response.Places)
                setOriginPlaces(response.Places)
            } catch(error){
                console.log("Błąd: " + error)
            }
            }
         
        fetchOrigins()
    }

 

    // Destination Handler Functions
    /* Ustawienie dest*/
    const handleDestChange = (option, actionMeta) => {
        actionMeta.action === "clear" ? setDestValue("") : setDestValue(option.PlaceId)
        getDestOptions(option ? option.PlaceName : "")
    }

    function getDestOptions(dest) {
        async function fetchDests() {
            try {      
                let response = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/${currency}/en-US/?` + new URLSearchParams({query: dest }), requestOptions)
                response = await response.json()
                // console.log(response.Places)
                setDestPlaces(response.Places)
            }catch(error) {
                console.error("Błąd:" + error)
            }
            }
        fetchDests()
    }


    // Input/Select Components
    const InboundInput = () => {
        return (
            <div id="inboundDateInput" className="search-input">
                <label htmlFor="inboundDate" className="hidden">Return Date:</label>
                <DatePicker 
                    id="inboundDate"
                    className="date-input"
                    name="inboundDate"
                    placeholderText="Return Date" 
                    todayButton="Today"
                    selected={inboundDate}
                    onChange={date => setInboundDate(date)}
                    minDate={new Date()}
                    required
                />
            </div>
        )
    }

    const SortSelect = () => {
        const handleSortChange = option => {
            option.value === sortAsc ? setFlights(flights) : setFlights(flights.slice().reverse())
            setSortAsc(option.value)
            setSortType(option)
        }
        
        return (
            <div>
                <label htmlFor="sortSelect" className="visuallyHidden"></label>
                <Select 
                    id="sortSelect"
                    name="sortSelect"
                    isSearchable="true"
                    value={sortType}
                    defaultValue={sortOptions[0]}
                    onChange={handleSortChange}
                    options={sortOptions}
                    placeholder="Sort"
                />
            </div>
        )
    }


    return (
        <div className="searchBar">
            <div className="search-options">               
                <div id="left-options">
                    <button id="roundtrip"
                            onClick={e => setShowInboundInput(false)}>
                            One Way ticket
                    </button>
                    <button id="oneWay"
                        onClick={e => setShowInboundInput(true)}>
                        Return ticket
                    </button>
                </div>


            </div>
            <form className="searchbar-form" onSubmit={handleSubmit}>
                <div id="originInput" className="search-input">
                    <label htmlFor="originSelect" className="hidden">Origin:</label>
                    <Select 
                        id="originSelect"
                        name="originSelect"
                        className="place-select"
                        isClearable
                        isSearchable
                        backspaceRemovesValue
                        onChange={handleOriginChange}
                        onInputChange={inputValue => getOriginOptions(inputValue)}
                        options={originPlaces}
                        getOptionLabel={({ PlaceName }) => PlaceName}
                        getOptionValue={({ PlaceId }) => PlaceId}
                        placeholder="Where from?"
                        filterOption={""}
                    />
                </div>
                <div id="destInput" className="search-input">
                    <label htmlFor="destSelect" className="hidden">Destination:</label>
                    <Select 
                        id="destSelect"
                        name="destSelect"
                        className="place-select"
                        isClearable
                        backspaceRemovesValue
                        onChange={handleDestChange}
                        onInputChange={inputValue => getDestOptions(inputValue)}
                        options={destPlaces}
                        getOptionLabel={({ PlaceName }) => PlaceName}
                        getOptionValue={({ PlaceId }) => PlaceId}
                        placeholder="Where to?"
                        filterOption={""}
                    />
                </div>
                <div id="outboundDateInput" className="search-input">
                    <label htmlFor="outboundDate" className="hidden">Departure Date:</label>
                    <DatePicker 
                        id="outboundDate"
                        className="date-input"
                        name="outboundDate"
                        placeholderText="Departure Date" 
                        todayButton="Today"
                        selected={outboundDate}
                        onChange={date => setOutboundDate(date)}
                        minDate={new Date()}
                        required
                    />
                </div>
                { showInboundInput ? <InboundInput /> : <></> }
                <button id="search" className="main-button">Search</button>
            </form>

            <div className="search-options">
            <div id="sort-prices">
                    {/* Sort Type Selector */}
                    { showFlights ? <SortSelect /> : <></> }
                </div>
            </div>

            {/* Flight List */}
            { showFlights ? <Flights flights={flights}/> : <h2 className="flights__no-results">You didn't choose any flight</h2> }
        </div>
    )
}

export default SearchBar;