import React from 'react';
import './style.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
      response.json().then((json) => {
        this.setState({ userData: json });
      })
    );
  }
  render() {
    return (
      <div>
        <h1> Hello StackBlitz!</h1>
        <p>{this.state.userData.map((x) => x.title)}</p>
      </div>
    );
  }
}
