import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: ''};

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    this.setState({message: event.target.value})
  }

  render() {
      let charNum = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        {charNum}
      </div>
    );
  }
}

export default TwitterMessage;