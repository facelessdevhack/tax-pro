import React, { Component } from 'react';
import { Row, Col } from 'antd';

export class Mission extends Component {
  render() {
    return (
      <Row>
        <Col lg={{ span: 18 }}>
          <h1>Our Mission</h1>
        </Col>
        <Col lg={{ span: 6 }}></Col>
      </Row>
    );
  }
}

export default Mission;
