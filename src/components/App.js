import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

import AgeStats from './AgeStats/AgeStats';

class App extends Component {
  constructor () {
    super();

    this.state = {
      newDate: '',
      birthday: '1992-06-21'
    }
  }

  changeBirthday () {
    console.log(this.state);
    this.setState({
      birthday: this.state.newDate
    })
  }

  render () {
    return (
      <div className="App">
        <Form inline>
        <h2>input your birthday!</h2>
          <FormControl 
            type="date"
            onChange={event => this.setState({newDate: event.target.value})}>
          </FormControl>
          {' '}
          <Button onClick={() => this.changeBirthday()}>submit</Button>
        </Form>
        <AgeStats date={this.state.birthday} />
      </div>
    )
  }
}

export default App;