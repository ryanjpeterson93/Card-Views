import React from "react";
import ItemForm from "./components/ItemForm";
import {ItemCard, CardContainer} from "./styles/Global"
import axios from 'axios'
import "./App.css";

class Items extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    axios.get("/api/items").then((res) => {
      this.setState({ items: res.data });
    });
  }

  renderItems = () => {
    return this.state.items.map((item) => (
      <ItemCard>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.likes}</p>
        <p>{item.image}</p>
      </ItemCard>
    ));
  };

  render() {
    return (
      <CardContainer>
        {this.renderItems()}
        <ItemForm />
      </CardContainer>
    );
  }
}
export default Items;
