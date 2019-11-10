import React, { Component } from "react";
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
import Dashboard from './components/views/Dashboard'



class App extends Component {


  componentDidMount() {
    axios
      .get("http://localhost:8000/customers")
      .then(res => this.setState({ customers: res.data }));
  }

  render() {

    return (
      <div className='App'>
        <Container>
          <Row>
            <Col xs={{ size: 8 }}>
              {/* <customers_tee_times
                customers={this.state.customers}
                addCustomersTeeTimes={this.addCustomerTeeTimes}
              /> */}
              <Dashboard />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



function mapStateToProps(state: any) {
  return {
    customers: state.customers.all
  };
}
export default connect(mapStateToProps)(App);
