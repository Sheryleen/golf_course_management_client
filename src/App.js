import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
// import SearchBar  from "./components/searchbar"
import { fetchAllCustomers } from "./store/customer/actionCreators";
import { fetchAllTeeTimes } from "./store/teetimes/actionCreators";
import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Row,
  Container,
  Col
} from "reactstrap";
import axios from "axios";
import Customers from "./components/customers/Customers";
import Dashboard from "./components/views/Dashboard";

// const App = () => {
//   <div>Search Bar/>

//   </div>
// }


function App(props) {
  useEffect(() => {
    props.fetchAllCustomers();
  }, []);
  return <h1>Golf Course Management </h1>;
}

export default connect(
  null,
  { fetchAllCustomers }
)(App);
