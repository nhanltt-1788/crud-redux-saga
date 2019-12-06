import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleDeleteCategory } from '../../actions';
import { closeModal } from '../../../GlobalModal/actions';
import { ButtonGroup, Button, DeleteModalWrapper } from './styles';

export class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteOkConfirm = this.handleDeleteOkConfirm.bind(this);
  }

  handleDeleteOkConfirm = () => {
    this.props.handleDeleteCategory();
  }

  render() {
    return (
      <DeleteModalWrapper>
        <p>Are you sure delete this category?</p>
        <ButtonGroup>
          <Button onClick={() => this.props.dispatchHandleCloseModal()}>Cancel</Button>
          <Button className="delete-btn" onClick={() => this.handleDeleteOkConfirm()}>Delete</Button>
        </ButtonGroup>
      </DeleteModalWrapper>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch) => ({
  dispathHandleDeleteCategory: (data) => dispatch(handleDeleteCategory(data)),
  dispatchHandleCloseModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal)
