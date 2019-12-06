import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';

import { handleCancelBtn } from './actions';

export class GlobalModal extends Component {
  render() {
    const { isVisible, children } = this.props;

    return (
      <Modal visible={isVisible} footer={null}>
        {children}
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  isVisible: state.modalReducer.isVisible,
  children: state.modalReducer.modalProps.children,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchHandleCancelBtn: () => dispatch(handleCancelBtn()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GlobalModal)
