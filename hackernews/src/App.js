import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  constructor(props) {
    super(props);  // allows us to access this.props
    this.state = { // binds [current] state to the class
      list,  // ES6 syntax here :)
    };
    this.onDismiss = this.onDismiss.bind(this);
  }
  onDismiss(id){
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList}); 
  }
  
  render() {
    return (
      <div className="App">
        {this.state.list.map(item =>  /* this is using the local
                                        state! this means the
                                        list is now part of the
                                        component
                                       */
            <div key={item.objectID}>
              <span>
              <a href={item.url}>{item.title} </a>
              </span>
              <span>{item.author} </span>
              <span>{item.num_comments} </span>
              <span>{item.points} </span>
              <span><button onClick={() => this.onDismiss(item.objectID)} type="button">
                    Dismiss</button></span>
          </div>)
        }
      </div>
    );
  }
}

export default App;
