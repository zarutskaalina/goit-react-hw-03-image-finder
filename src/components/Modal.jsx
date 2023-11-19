import { Component } from 'react';
import { StyledModal } from './Styles';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { modalData } = this.props;
    return (
      <StyledModal onClick={this.handleOverlayClick}>
        <div className="modal">
          <img
            key={modalData.id}
            src={modalData.largeImageURL}
            alt={modalData.tags}
            height="500"
            width="900"
          />
        </div>
      </StyledModal>
    );
  }
}
