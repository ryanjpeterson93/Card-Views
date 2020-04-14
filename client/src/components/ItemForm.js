import React from "react";
import { Form, Button } from "../styles/Global";

class ItemForm extends React.Component {
  state = {
    name: "",
    image: "",
    description: "",
    likes: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const item = { ...this.state };
    this.props.addItem(item);
    this.props.toggleForm();
    // this.props.history.push(/items);
  };

  handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    this.setState({ [name]: value });
    console.log(e);
  };

  render() {
    const { name, image, description, likes } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <input
          placeholder="Name of Item"
          style={styles.input}
          onChange={this.handleChange}
          value={name}
          name="name"
        />
        <input
          placeholder="Description of Item"
          style={styles.input}
          onChange={this.handleChange}
          value={description}
          name="description"
        />
        {/* End game is to make this an integer field */}
        <input
          placeholder="Number of Likes"
          style={styles.input}
          onChange={this.handleChange}
          value={likes}
          name="likes"
        />
        {/* maybe toss a cloudinary photo uploader in this */}
        <input
          placeholder="Input Image URL"
          style={styles.input}
          onChange={this.handleChange}
          value={image}
          name="image"
        />
        <div>
          <Button onSubmit={this.handleSubmit}>Submit</Button>
        </div>
      </Form>
    );
  }
}

export default ItemForm;

const styles = {
  input: {
    padding: "1em",
    border: "solid 1px black",
    width: "200px",
    margin: "2px",
  },
};
