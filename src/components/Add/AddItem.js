import React from 'react';
import uniqueId from '../../../node_modules/lodash.uniqueid';

class AddItem extends React.Component{


  state = {
    items:[
      {
        id:uniqueId(),
      },
    ]
  }


  styleAddItem = () =>{
    return{
      height:'300px',
    }
  }

  styleItemSheet = () =>{
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
    this.props.passItemsToProps(this.state.items);
  }

  addEntry = (e) =>{
    //e.preventDefault();
    this.setState((prevState => ({
      items: [...prevState.items, {id: uniqueId()}],
    })));
  }

  deleteThis = (e) => {
    let items = [...this.state.items];
    items.splice(e.target.id, 1);
    this.setState({ items });

  }

  onItemChange = (e) =>{
      let items = [...this.state.items];
      items[e.target.id][e.target.name] = e.target.value
      this.setState({ items });

  }


  render(){

  const { items } = this.state;

    return(
      <div style = {this.styleAddItem()}>
        <p> Add Items </p>
        <button onClick = {this.addEntry} > moar </button>
        <div style = {this.styleItemSheet()}>
          <form onSubmit = {this.noSubmit} >
            {
                items.map((value, index) => {
                  let itemId = `item-${index}`;
                  return(
                    <div key = {itemId}>
                      <input
                        type = "text"
                        name = "itemName"
                        placeholder = "Add Item"
                        id = {index}
                        value = {value.itemName || ''}
                        onChange = {this.onItemChange}
                      />

                      <input
                        type = "text"
                        name = "itemPrice"
                        placeholder = "$$$"
                        id = {index}
                        value = {value.itemPrice || ''}
                        onChange = {this.onItemChange}
                      />
                    <button id = {index} onClick = {this.deleteThis.bind(this)} > Delete </button>
                    </div>
                  );
                })
            }
          </form>
        </div>
        <button onClick = {this.submit}> send it away </button>
      </div>
    );

  }
}

export default AddItem;
