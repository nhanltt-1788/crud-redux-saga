import React, { Component } from 'react'

import UploadIcon from '../../images/upload.png';
import { Dropzone, Error } from './styles';

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hightlight: false,
    }

    this.fileInputRef = React.createRef();
    this.openFileDialog = this.openFileDialog.bind(this);
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDragOver(e) {
    e.preventDefault();

    this.setState({
      hightlight: true
    });
  }

  onDragLeave() {
    this.setState({
      hightlight: false,
    });
  }

  onDrop(e) {
    e.preventDefault();

    const files = e.dataTransfer.files;

    if(this.props.onFilesAdded) {
      this.props.onFilesAdded(files);
    }
    this.setState({ hightlight: false });
  }

  openFileDialog() {
    this.fileInputRef.current.click();
  }

  onFilesAdded(e) {
    const file = e.target.files;
    
    if(this.props.onFilesAdded) {
      this.props.onFilesAdded(file);
    }
  }

  render() {
    const { error } = this.props;

    return (
      <>
        <Dropzone
          onClick={this.openFileDialog}
          hightlight={this.props.hightlight}
          onDragOver={this.onDragOver}
          onDragLeave={this.onDragLeave}
          onDrop={this.onDrop}
        >
          <img src={UploadIcon} alt="upload icon" className="upload-icon" />
          <input
            type="file"
            className="file-input"
            ref={this.fileInputRef}
            onChange={this.onFilesAdded}
          />
          <span className="file-name">{this.props.file ? this.props.file.name : 'Upload Files'}</span>
          
        </Dropzone>
        {
          error && (<Error>{error}</Error>)
        }
      </>
    )
  }
}

export default index
