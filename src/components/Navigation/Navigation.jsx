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

function Navigation({ setNavOpen, navOpen, toggleCart}) {

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
      <nav className={navOpen ? 'active' : ''}>
        <ul>
          <a href={"/"}>Home</a>
          <a href={"/vendors"}>Vendors</a>
          <a href={"/categories"}>Categories</a>
          <a href={"/contact"}>Contact Us</a>
        </ul>

        <div className="col-3">
          <form className="search-bar" value={query} onChange={(e)=>{ setQuery(e.target.value)}} onSubmit={(e) =>{ e.preventDefault(); handleSearch() }}>
            <input type="search" placeholder="What are you looking for?" />
            <FontAwesomeIcon  icon={faMagnifyingGlass}></FontAwesomeIcon>
          </form>
          <FontAwesomeIcon onClick={() => toggleCart()} icon={faBagShopping} />
          <button>Sign Up</button>
        </div>
      </nav>

      <Burger navOpen={navOpen} setNavOpen={setNavOpen}/>
    </header>
  );
}

export default Navigation;
