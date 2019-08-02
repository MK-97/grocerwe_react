import React from 'react';
import uniqueId from '../../../node_modules/lodash.uniqueid';

class AddName extends React.Component {

  state = {
    names:[
      {
        id:uniqueId(),
      },
    ]
  }

  styleAddName = () =>{
    return{
      height:'300px',
    }
  }

  styleNameSheet = () =>{
    return{
      padding: '10px',
      background: 'lightblue',
      overflowY: 'scroll',
      height: '200px',
    }
  }

  noSubmit = (e) =>{
    e.preventDefault();
  }

  submit = (e) =>{
    e.preventDefault();
    this.props.passNamesToProps(this.state.names);
  }

  addEntry = (e) =>{
    this.setState((prevState =>({
      names: [...prevState.names, {id:uniqueId()}],
    })));
  }

  deleteName = (e) => {
    let names = [...this.state.names];
    names.splice(e.target.id, 1);
    this.setState({names});
  }

  onChange = (e) =>{
    let names = [...this.state.names];
    names[e.target.id][e.target.name] = e.target.value;
    this.setState({names});
  }

  render(){

    const { names }  = this.state;

    return(

      <div style = {this.styleAddName()}>

        <p> Add Names </p>
        <button onClick = {this.addEntry}> moar </button>

        <div style = {this.styleNameSheet()}>
          <form onSubmit = {this.noSubmit}>
          {

            names.map((value, index) =>{
              let temp_name = [...this.state.names];
              temp_name[index]['id'] = value.id;

              let nameID = `name-${index}`;
              return(
                <div key = {nameID}>
                  <input
                    type = "text"
                    name = "nameOfPerson"
                    placeholder = "Name here"
                    id = {index}
                    value = {value.nameOfPerson || ''}
                    onChange = {this.onChange}
                  />
                <button id = {index} onClick = {this.deleteName}> get rid of dis</button>
                </div>

              );
            })
          }
          </form>
        </div>
        <button onClick = {this.submit}> Send it </button>
      </div>
    );
  }



}

export default AddName;
