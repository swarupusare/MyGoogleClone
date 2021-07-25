import React from 'react'
import { useStateValue } from './StateProvider';
import "./SearchPage.css";
import useGoogleSearch from './useGoogleSearch';
import { Link } from "react-router-dom";
import Search  from "./components/Search";
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
function SearchPage() {
    const[{term},dispatch]=useStateValue();
    const {data} = useGoogleSearch(term);
    console.log(data);
    return (
        <div className="searchPage"> 
            <div className="searchPage_header">
                  <Link to="/">
                      <img
                        className="searchPage_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png">
                      </img>
                  </Link>
                  <div className="searchPage_headerbody">
                       <Search hideButtons />
                       <div className="searchPage_options">
                          <div className="searchPage_optionLeft">
                             <div className="searchPage_option">
                                 <SearchIcon />
                                <Link to="/all">All</Link>
                             </div>
                             <div className="searchPage_option">
                                 <DescriptionIcon />
                                <Link to="/news">News</Link>
                             </div>
                             <div className="searchPage_option">
                                 <ImageIcon />
                                <Link to="/images">Images</Link>
                             </div>
                             <div className="searchPage_option">
                                 <LocalOfferOutlinedIcon />
                                <Link to="/shopping">Shopping</Link>
                             </div>
                             <div className="searchPage_option">
                                 <RoomOutlinedIcon />
                                <Link to="/map">Maps</Link>
                             </div>
                             <div className="searchPage_option">
                                 <MoreVertOutlinedIcon />
                                <Link to="/more">more</Link>
                             </div>
                          </div>
                          <div className="searchPage_optionRight">
                             <div className="searchPage_option">
                                <Link to="/setting">Settings</Link>
                             </div>
                             <div className="searchPage_option">   
                                <Link to="/tool">Tools</Link>
                             </div>     
                          </div>
                       </div>
                  </div>
            </div>
        
            {term ? 
                <div className="searchPage_results">
                    <p className="searchPage_resultCount">
                       About {data?.searchInformation.formattedTotalResults} results 
                       ({data?.searchInformation.formattedSearchTime}  seconds) for {term}
                    </p>          
                    {
                        data?.items.map(item=>(
                            <div className="searchPage_result">
                                <a className="searchPage_resultLink" href={item.link} >
                                    { item.pagemap?.cse_image?.length  > 0 &&
                                        item.pagemap?.cse_image[0]?.src && (
                                            <img 
                                              className="searchPage_resultImage"
                                              src={
                                                  item.pagemap?.cse_image?.length > 0 &&
                                                  item.pagemap?.cse_image[0]?.src
                                              }
                                              alt=""
                                            />
                                        )

                                    }
                                    {item.displayLink}
                                </a>
                                <a href={item.link} className="searchPage_resultTitle">
                                   <h2> {item.title} </h2>
                                </a>
                                <p className="searchPage_resultSnippet">
                                    {item.snippet}
                                </p>
                            </div>
                        ))
                    }
                </div>:
                <h3>Please search something</h3>
            }
        </div>
    )
}

export default SearchPage;
