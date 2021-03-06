import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    axios
      .get('/api/users')
      .then(response => console.log(response) || this.setState({ users: response.data }))
      .catch(err => console.log(err))
  }
  render () {
    const { users } = this.state
    console.log('users:', users)
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>demo mern-docker</p>
          {users.map((user, index) => (
            <p key={index}>
              {index + 1}. {user.username}
            </p>
          ))}
        </header>
      </div>
    )
  }
}

export default App
