import React, { Component } from 'react';
import './scss/UrlForm.scss';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

class UrlForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      urls: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    // axios.post(url, value).then(response => response.data)
    //   .then((data) => {
    //     this.setState({ urls: data });
    //     console.log(urls);
    //   });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { value } = this.state;
    alert(`L'url a été soumise : ${value}`);
    event.preventDefault();
    const { urls } = this.state;
    console.log(urls);
    const url = `${API_URL}/api/stockUrl`;
    console.log(url);
    console.log('greg', value);
    axios.post(url, event.target.value).then(response => response.data)
      .then((data) => {
        this.setState({ urls: data });
        console.log(urls);
      });
  }

  render() {
    const { value } = this.state;
    const { urls } = this.state.urls;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Links that mean business</h1>
        <h2>Create and share trusted, powerful short links</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={value} onChange={this.handleChange} placeholder="Your url here" />
          </label>
          <input type="submit" value="post" />
        </form>
        <p>{urls}</p>
      </div>
    );
  }
}

export default UrlForm;
