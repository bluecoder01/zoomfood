import React, { useState } from "react";
import { ReactComponent as Logo } from "./assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import Burger from "../burger";
import { Link, useNavigate } from "react-router-dom";

function Navigation() {

  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSearch(){
    if (query !== '' || query !=="\n"){
      navigate('/search/'+query);
    }
    else{
      return
    }
    
  }

  return (
    <header>
      <Link to={"/"}>
        <Logo className="logo" />
      </Link>
      <nav>
        <ul>
          <a href={"/"}>Home</a>
          <a href={"/vendors"}>Vendors</a>
          <a href={"/"}>Categories</a>
          <a href={"/"}>About Us</a>
        </ul>

        <div className="col-3">
          <form className="search-bar" value={query} onChange={(e)=>{ setQuery(e.target.value)}} onSubmit={(e) =>{ e.preventDefault(); handleSearch() }}>
            <input type="search" placeholder="What are you looking for?" />
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </form>
          <FontAwesomeIcon icon={faBagShopping} />
          <button>Sign Up</button>
        </div>
      </nav>

      <Burger />
    </header>
  );
}

export default Navigation;
