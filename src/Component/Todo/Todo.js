import React, { Component } from 'react';
import List from '../List/List';
import axios from 'axios';

export default class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            term: "",
        }
    }
    componentDidMount() {
        axios.get('/getList')
            .then(res => this.setState({ items: res.data }))
    }
    onSubmit = (event) => {
        const item = this.state.term
        axios.post('/addItem', {item})
            .then(res => this.setState({
                term: "",
                items: res.data
            }))
        event.preventDefault()
    }
    onChange = (e) => {
        this.setState({ term: e.target.value });
    }
    handleDelete = index => {
        axios.delete(`/todoList/${index}`)
            .then(res => this.setState({ items: res.data }))
        console.log('Deleted')
    }
    render() {
        const item = this.state.items
        return (
            <div>
                <div className="App">
                    <label>Todo: </label>
                    <input value={this.state.term} onChange={this.onChange} />
                    <button onClick={this.onSubmit}>Submit</button>
                </div>
                <div>
                    <ul>
                        {item.map((item, index) => {
                            console.log(this.state.term)
                            return <List todo={item} handleDelete={this.handleDelete} index={index}/>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}