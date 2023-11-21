import React from "react";
import { ReactComponent as Logo } from "./assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import Burger from "../burger";
import { Link } from "react-router-dom";

function Navigation() {
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
          <form className="search-bar">
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
