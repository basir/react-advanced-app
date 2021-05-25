import React, { Component } from 'react';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user: data });
      });
  }
  render() {
    return (
      <div>
        User Info: <br />
        Name: {this.state.user.name}
        <br />
        Email: {this.state.user.email}
      </div>
    );
  }
}
