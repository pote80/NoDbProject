import React, { Component } from 'react';
import './App.css';
import { getQuote } from './Component/ron_quote/quote'
import axios from 'axios'
import Todo from './Component/Todo/Todo'
import Header from './Component/Header/Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      input: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    getQuote().then(quote => {
      this.setState({
        quote: quote
      })
    })
  }
  submitChange(e) {
    console.log('you changed something!');
    const string = this.state.input
    axios.post('/yourName', { string })
      .then(res => this.setState({ input: res.data }))
  }
  _showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }
  cancelCourse = () => {
    this.setState({
      input: "",
    });
  }
  onClick = () => {
    this.cancelCourse()
    this._showMessage(false)
  }
  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }
  submit = () => {
    this._showMessage(true)
    axios.get('/newQuote')
      .then(res => this.setState({ data: res.data }))
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="App-intro">
          <label>Your Name: </label>
          <input value={this.state.input} onChange={this.handleChange} />
          <button onClick={this.submit}>Submit</button>
          <button onClick={this.onClick}>Clear</button>
          {this.state.showMessage && (<div>{this.state.input}, {this.state.quote}</div>)}
        </div>
        <div>
          <Todo />
        </div>
      </div>
    );

  }
}
export default App;
