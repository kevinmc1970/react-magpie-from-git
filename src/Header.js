import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import './Header.css';

// this is a react component - it takes 'props' argument and returns JSX
// double {{}} is this JS expression will pass in a JSON object
// single {} is this JS will pass in a variable (pointing to a JSON object)
// defo need inline style to override react-bootstrap BTW
// notice inline style is marginBottom and not the usual margin-bottom

export default ({ company }) => <div>
    <div className="jumbotron" style={{ marginBottom: "0" }}>
        <h1>{company}</h1>
    </div>
    <Nav bsStyle="tabs" activeKey={1}>
        <LinkContainer to="/">
            <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/search">
            <NavItem eventKey={2}>Search</NavItem>
        </LinkContainer>
        <NavItem eventKey={3} target="_blank" href="https://www.ebay.co.uk/sch/magpieretail1/m.html?_nkw=&_armrs=1&_ipg=&_from=">
            Visit us on eBay</NavItem>
    </Nav>
</div>;

