import React,{useState,useEffect} from 'react';
import api_key from "./Keys";

const CONTEXT_KEY="ae1d9f871f6f1c096";

const useGoogleSearch=(term)=>{
    const [data,setData]=useState(null);
    
    useEffect(()=>{
        const fetchData=async()=>{
            fetch(
               `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${CONTEXT_KEY}&q=${term}`
            ).then(response=>response.json())
            .then(result=>{
                setData(result);
            })
        }
        fetchData();
    },[term])
     return {data} ;
};

export default useGoogleSearch;
