// import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import logo from "../../Images/logo.png";
// export class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//     console.log(this.state.username);
//     console.log(this.state.password);
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.login(this.state.username, this.state.password);
//   }
//   render() {
//     if (this.props.auth.username) {
//       return <Redirect to="/account" push={true} />;
//     }
//     return (
//       <div className="login">
//         <form
//           autoComplete="off"
//           className="login-form"
//           onSubmit={this.handleSubmit}
//         >
//           <img src={logo} className="login-logo" alt="logo" />

//           <h1 className="login-header">Login</h1>
//           <label>
//             <input
//               placeholder="Username"
//               className="login-username-input"
//               onChange={this.handleChange}
//               value={this.state.username}
//               name="username"
//             />
//           </label>
//           <label>
//             <input
//               placeholder="Password"
//               className="login-password-input"
//               onChange={this.handleChange}
//               value={this.state.password}
//               name="password"
//               type="password"
//             />
//           </label>
//           <button className="login-form-submit-button">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
