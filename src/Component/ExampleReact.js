import React, { Component } from 'react';
import SiteHeader from '../SiteHeader/SiteHeader';
import Modal from './Modal';

class ExampleReact extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
      console.log("RRRRRRR");
    return (
      <div className="App">
        <button onClick={this.toggleModal}>
          Open the modal
        </button>
        
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
      </div>
    );
  }
}

export default ExampleReact;