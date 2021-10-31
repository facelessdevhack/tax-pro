import { Input, Select, Button } from 'antd';
import React, { Component } from 'react';

const { Option } = Select;

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      services: '',
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { email, firstName, lastName, phone, services } = this.state;
    return (
      <>
        <h2 className="text-open text-6xl text-center my-10">Contact Us</h2>
        <form className="grid grid-cols-2 gap-10">
          <Input
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Type your First Name"
            onChange={this.onChange}
          />
          <Input
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Type your Last Name"
            onChange={this.onChange}
          />
          <Input
            type="email"
            name="email"
            value={email}
            placeholder="Type your email"
            onChange={this.onChange}
          />
          <Input
            type="text"
            name="phone"
            value={phone}
            placeholder="Type your Phone"
            onChange={this.onChange}
          />
          <Select
            placeholder="Select a option and change input text above"
            onChange={this.onGenderChange}
            allowClear
          >
            <Option value="Tax Services">Tax Services</Option>
            <Option value="Book Keeping">Book Keeping</Option>
            <Option value="Web Development">Web Development</Option>
            <Option value="Hire Accountant">Hire Accountant</Option>
          </Select>
        </form>
        <Button type="primary" shape="round" className="my-8 w-3/12">
          Submit
        </Button>
      </>
    );
  }
}

export default Contact;
