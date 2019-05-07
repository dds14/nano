import React, { Component } from "react";
import axios from "axios";
import "./Contact.scss";
import { Redirect } from "react-router-dom";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("submittedd");

    let data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      message: this.state.message
    };

    axios.post("/api/contact", data).then(this.setState({ button: true }));
    console.log(data);
  }

  render() {
    if (this.state.button) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Contact Us</h1>
        <form
          autocomplete="off"
          className="contact-form"
          onSubmit={this.handleSubmit}
        >
          <input
            className="contact-first-name-input"
            placeholder="First Name"
            onChange={this.handleChange}
            value={this.state.first_name}
            name="first_name"
          />
          <input
            className="contact-last-name-input"
            placeholder="Last Name"
            onChange={this.handleChange}
            value={this.state.last_name}
            name="last_name"
          />
          <input
            className="contact-email-input"
            placeholder="Email Address"
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
          />
          <textarea
            className="contact-message-input"
            placeholder="Message"
            onChange={this.handleChange}
            value={this.state.message}
            name="message"
          />
          <button className="contact-form-submit-button">Get In Touch</button>
        </form>
      </div>
    );
  }
}
