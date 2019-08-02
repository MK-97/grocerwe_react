import React from 'react';
import AddItem from './components/Add/AddItem.js';
import AddName from './components/Names/AddName.js';
import Split from './components/Split/Split.js';
import './App.css';

class App extends React.Component{

  state = {
    items:[],
    names:[]
  }

  passItemsToProps = (e) =>{
    this.setState(
      {items:e}
    )
  }

  passNamesToProps = (e) =>{
    this.setState(
      {names:e}
    )
  }

  render(){
    return (
      <div className = "App">
        <h1> GrocerWe</h1>
        <AddItem passItemsToProps = {this.passItemsToProps}/>
        <AddName passNamesToProps = {this.passNamesToProps}/>
        <Split items = {this.state.items} names = {this.state.names}/>
      </div>
    );
  }
}

export default App;
