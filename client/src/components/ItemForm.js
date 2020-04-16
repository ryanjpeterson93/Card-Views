import React from "react";
import { Form, FormButton } from "../styles/Global";

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

          autoFocus
          required
          placeholder="Name of Item"
          style={styles.input}
          onChange={this.handleChange}
          value={name}
          name="name"
        />
        <textarea
          required
          placeholder="Description of Item"
          style={styles.input}
          onChange={this.handleChange}
          value={description}
          name="description"
        />
        {/* End game is to make this an integer field */}
        <input
          type = "number"
          placeholder="Number of Likes"
          style={styles.input}
          onChange={this.handleChange}
          value={likes}
          name="likes"
        />
        {/* maybe toss a cloudinary photo uploader in this */}
        <input
          type = "url"
          required
          placeholder="https://example.com"
          style={styles.input}
          onChange={this.handleChange}
          value={image}
          name="image"
        />
        <div>
          <FormButton onSubmit={this.handleSubmit}>Submit</FormButton>
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
    margin: "2px",
    borderRadius: "3px",
    fontSize: "12px"
  },
};
