import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      maxChars: props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
        <strong>Remaining characters: {this.props.maxChars - this.state.message.length}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
