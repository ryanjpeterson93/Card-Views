import React from "react";
import ItemForm from "./components/ItemForm";
import {
  CardText,
  ItemCard,
  CardContainer,
  Button,
  StyledImg,
  StyledContainer,
  StyledHeader,
} from "./styles/Global";
import axios from "axios";
import "./App.css";

class Items extends React.Component {
  state = {
    items: [],
    showForm: false,
  };

  toggleSortAsc = () => {
    const { items } = this.state;
    let newItems = items;
    this.setState({
      items: newItems.sort((a, b) => a.likes - b.likes),
    });
  };

  toggleSortDesc = () => {
    const { items } = this.state;
    let newItems = items;
    this.setState({
      items: newItems.sort((a, b) => b.likes - a.likes),
    });
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
      <ItemCard key={item.id}>
        <CardText>
          <p>Name:{item.name}</p>
          <p>Description: {item.description}</p>
          <p>Likes: {item.likes}</p>
        </CardText>
        <StyledImg>
          <img src={item.image} width="100%" height="100%" />
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
        <StyledHeader>Items</StyledHeader>
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
