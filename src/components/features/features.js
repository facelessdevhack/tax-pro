import { Col, Row } from 'antd';
import React, { Component } from 'react';
import books from '../../assets/images/books.jpg';
import tax from '../../assets/images/accounts.jpg';
import web from '../../assets/images/web.jpg';

class Features extends Component {
  render() {
    return (
      <Row className="text-white text-center px-5">
        <Col lg={{ span: 5 }} className="bg-seance p-5 rounded-xl">
          <div className="px-5">
            <img
              src={books}
              alt="Book Keeping"
              className="rounded-full w-1/2 m-auto"
            />
            <h2 className=" text-white text-open text-2xl pt-5">
              BOOK KEEPING
            </h2>
            <p className="text-justify text-md">
              Ask us for the expert assistance from Accounting, Audit, and
              Bookkeeping Consultant
            </p>
          </div>
        </Col>
        <Col lg={{ span: 5, offset: 1 }} className="bg-seance p-5 rounded-xl">
          <div className="px-5">
            <img
              src={tax}
              alt="Book Keeping"
              className="rounded-full w-1/2 m-auto"
            />
            <h2 className=" text-white text-open text-2xl pt-5">
              TAX PREPARATION SERVICES
            </h2>
            <p className="text-justify text-md">
              Tax preparation is a systematic approach: there are quite a few
              protocols and standards that are followed in preparing tax
              returns,
            </p>
          </div>
        </Col>
        <Col lg={{ span: 5, offset: 1 }} className="bg-seance p-5 rounded-xl">
          <div className="px-5">
            <img
              src={web}
              alt="Book Keeping"
              className="rounded-full w-1/2 m-auto"
            />
            <h2 className=" text-white text-open text-2xl pt-5">
              WEB DEVELOPMENT
            </h2>
            <p className="text-justify text-md">
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>
          </div>
        </Col>
        <Col lg={{ span: 5, offset: 1 }} className="bg-seance p-5 rounded-xl">
          <div className="px-5">
            <img
              src={web}
              alt="Book Keeping"
              className="rounded-full w-1/2 m-auto"
            />
            <h2 className=" text-white text-open text-2xl pt-5">
              WEB DEVELOPMENT
            </h2>
            <p className="text-justify text-md">
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Features;
