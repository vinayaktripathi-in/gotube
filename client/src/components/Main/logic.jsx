import { Component } from "react";
export default class logic extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:4000/video");
      const data = await response.json();
      this.setState({ videos: [...data] });
    } catch (error) {
      console.log(error);
    }
  }
}
