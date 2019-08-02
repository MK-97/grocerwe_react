import React from 'react';

class Split extends React.Component{

  enumerate = () => {this.props.items.map((value, index) =>
    <li key = {value.id}> {value.itemName} </li>,
    console.log(value.itemName),
  )}


  render(){


    return(

      <div>

      <ul> {this.enumerate} </ul>

      </div>

    );
  }

}

export default Split;
