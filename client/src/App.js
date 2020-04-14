import React from 'react';
import ItemForm from './components/ItemForm'
import './App.css';

class Items extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        Working
        <ItemForm/>
      </div>
    );
  }

}
export default Items