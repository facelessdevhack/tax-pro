import { Row, Col } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <Row className="flex items-center justify-between bg-mauve p-5 rounded-2xl">
        <Col lg={{ span: 5 }}>
          <p className="font-open text-4xl">Tax Professionals</p>
        </Col>
        <Col lg={{ span: 18 }} className="flex flex-col w-3/4 justify-around">
          <p to="/">Home</p>
          <p to="/">Contact</p>
          <p to="/">Income Tax</p>
          <p to="/">Book Keeping</p>
        </Col>
      </Row>
    );
  }
}

export default NavBar;
