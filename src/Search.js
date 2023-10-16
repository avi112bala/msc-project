import React, { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom"; 
import picture from './image/Picture.png'
import picture2 from './image/Picture2.png'
import picture3 from './image/Picture3.png'
import axios from 'axios'
import { Link } from "react-router-dom";

const Search = () => {

   const [searchTerm, setSearchTerm] = useState("");
   const [data, setData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);
        const navigate = useNavigate();

   useEffect(()=>{
    axios.get("https://retoolapi.dev/T7uGrl/data")
    .then((responce)=>{
        setData(responce.data)
    })
    .catch((err)=>{
        console.log(err,"no data found");
    })
   },[])

   useEffect(() => {
     // Filter data based on the search term
     if (data && data.length > 0) {
       const filtered = data.filter(
         (item) =>
           item.name &&
           item.name.toLowerCase().includes(searchTerm.toLowerCase())
       );
       setFilteredData(filtered);
     } else {
       setFilteredData([]);
     }
   }, [data, searchTerm]);


     const handleSearch = (e) => {
       setSearchTerm(e.target.value);
     };

       const handleSearchSubmit = () => {
         // Redirect to the profile page with the selected name
         navigate(`/profile/${searchTerm}`);
       };

  return (
    <div className="searchhh">
      <div className="search">
        <div className="partner">
          <p className="partnerpara">
            Find <span className="span">partner</span>(CAs) Avilable Online
          </p>
        </div>
        <div className="partnerparagraph">
          <p>
            <span>CONNECT</span> with us where your services are listed and
            visible to a myriad of businesses seeking CA’s for compliance
            support
          </p>
        </div>
        <div className="partnersearch">
          <input
            type="text"
            placeholder="Search By Name"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button onClick={handleSearchSubmit}>Search</button>
          {searchTerm && (
            <ul>
              {filteredData.map((item) => (
                <li key={item.id}>
                  <Link to={`/profile/${item.name}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="partnerImage">
        <div className="image1">
          <img src={picture} />
        </div>
        <div className="image2">
          <img src={picture2} />
        </div>
        <div className="image3">
          <img src={picture3} />
        </div>
      </div>
    </div>
  );
};

export default Search;
