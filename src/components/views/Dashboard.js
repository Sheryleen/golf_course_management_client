import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { Button, Row, Col, Container } from "reactstrap";

const Dashboard = props => {

    let customers = props.customers.map(customer => {
        return <div>{customer.name}</div>;
    });


//defining customers
//const customers = useSelector(state => state.customers.all)
// let tableOfCustomersTeeTimes = props.customers.map(
//   customers_tee_times =>

    return (<Container>
        <h1> Golf Course Management</h1>
        <Row>
            <Col xs={{ size: 8 }}>
                {customers}
            </Col>
        </Row>
    </Container>) 
    
}


function mapStateToProps(state) {
    return {
        customers: state.customers.all
    };
}
export default connect(mapStateToProps)(Dashboard);
