import React from "react";
import ItemForm from "./components/ItemForm";
import { ItemCard, CardContainer, Button } from "./styles/Global";
import axios from "axios";
import "./App.css";

class Items extends React.Component {
  state = {
    items: [],
    showForm: false,
  };

  componentDidMount() {
    axios.get("/api/items").then((res) => {
      this.setState({ items: res.data });
    });
  }

  addItem = (item) => {
    axios.post("/api/items", item).then((res) => {
      this.setState([res.data, ...this.state.items]);
    });
  };

  renderItems = () => {
    return this.state.items.map((item) => (
      <ItemCard>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.likes}</p>
        <img src={item.image} />
      </ItemCard>
    ));
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  render() {
    return (
      <div>
        <h1>Items</h1>
        <Button onClick={this.toggleForm}>New Item</Button>
        {this.state.showForm ? (
          <ItemForm addItem={this.addItem} toggleForm={this.toggleForm} />
        ) : (
          <></>
        )}
        <CardContainer>{this.renderItems()}</CardContainer>
      </div>
    );
  }
}
export default Items;
