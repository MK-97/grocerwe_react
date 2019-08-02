import React from 'react';
import AddItem from './AddItem.js';
import PropTypes from 'prop-types';

class Add extends React.Component{
  render(){
    return this.props.items.map((item) =>(
      <AddItem key = {item.id} item = {item}/>
    ))
  }

}

Add.propTypes = {
  items:PropTypes.array.isRequired
}
export default Add;
