import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
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

function App(props) {
  useEffect(() => {
    props.fetchAllCustomers();
  }, []);
  return <div></div>;
}

export default connect(
  null,
  { fetchAllCustomers }
)(App);
