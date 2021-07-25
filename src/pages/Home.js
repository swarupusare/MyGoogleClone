import React from 'react';
import "./Home.css";
import {
    Link
  } from "react-router-dom"; 
  import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../components/Search';
function Home() {
    return (
        <div className="home">
             <div className="home_header">
                 <div className="home_headerLeft">
                        {/* link  */}
                         <Link to="/about">About</Link>
                        {/* link  */}
                        <Link to="/store">Store</Link>
                 </div>
                 <div className="home_headerRight">
                        {/* link  */}
                        <Link to="/gmail">Gmail</Link>
                        {/* link  */}
                        <Link to="/images">Images</Link>
                        {/* icon */}
                        <AppsIcon />
                        {/* Avatar  */}
                        <Avatar  style={{ margin: "10px",  width: "35px", height: "35px",}} />
                 </div>
             </div>
             <div className="home_body">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" 
                      alt=""
                 />
                 <div className="home_inputContainer">
                     <Search />
                 </div>
             </div>
        </div>
    )
}

export default Home;
