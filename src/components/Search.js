import React, { useState } from 'react';
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button, Link } from '@material-ui/core';
import {useHistory} from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
function Search({hideButtons=false}) {
    const[{},dispatch]=useStateValue();
    const [input,setInput]=useState("");
    const history=useHistory(); 
    const search=(e)=>{
        e.preventDefault();
        console.log("You hit the search button >> ",input);
        if(input==""){
            <Link to="/"/>
        }
        else{
            dispatch({
                type:actionTypes.SET_SEARCH_TERM,
                term:input
            })
           history.push("/search");
           
        }
    }
   
    return (   
            <form onSubmit={search} className="search">
            <div className="search_input">
                 <SearchIcon className="search_inputIcon" />
                <input value={input} onChange={e=>setInput(e.target.value)} />
                <MicIcon />
            </div>
            {
               !hideButtons ? (
                    <div className="search_buttons">
                    <Button onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                    </div>
                ):<h2></h2>
            }
          
           </form>

    )
}

export default Search;
