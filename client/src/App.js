import React from "react";
import ItemForm from "./components/ItemForm";
import { ItemCard, CardContainer, Button, StyledImg, StyledContainer } from "./styles/Global";
import axios from "axios";
import "./App.css";

class Items extends React.Component {
  state = {
    items: [],
    showForm: true,
  };

  toggleSortAsc = () => {
    const {items} = this.state
    let newItems = items
    this.setState({
      items: newItems.sort((a, b) => a.likes - b.likes)
    })
  }

  toggleSortDesc = () => {
    const {items} = this.state
    let newItems = items
    this.setState({
      items: newItems.sort((a, b) => b.likes - a.likes)
    })
  }

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
        <p>Name:{item.name}</p>
        <p>Description: {item.description}</p>
        <p>Likes: {item.likes}</p>
        <StyledImg>
          <img src={item.image} width='150px' height='150px'/>
        </StyledImg>
      </ItemCard>
    ));
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  render() {
    return (
      <StyledContainer>
        <h1>Items</h1>
        <Button onClick={this.toggleSortAsc}>Sort Asc</Button>
        <Button onClick={this.toggleSortDesc}>Sort Desc</Button>
        <Button onClick={this.toggleForm}>New Item</Button>
        {this.state.showForm ? (
          <ItemForm addItem={this.addItem} toggleForm={this.toggleForm} />
        ) : (
          <></>
        )}
        <CardContainer>{this.renderItems()}</CardContainer>
      </StyledContainer>
    );
  }
}
export default Items;
