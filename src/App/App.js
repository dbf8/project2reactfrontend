import React, { Component } from 'react'
import axios from 'axios'

import logo from '../logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogPost: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/').then(res => {
      const blogPost = res.data
      console.log(res.data)
      this.setState({ blogPost })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fortnite, the Blog</h1>
        </header>
        <p className="App-intro">WORDS AND PHRASES</p>
      </div>
    )
  }
}

export default App
