import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  debug
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

export default hot(module)(App)
