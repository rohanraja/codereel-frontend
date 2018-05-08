import React, { Component} from 'react';
import { connect } from 'react-redux';
import styles from './code_header.css';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

// -- import_hook --

export class Code_header extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    title: "<filename>"
  }

  render() {
    return (
      <div className={styles.base}>
      <Toolbar>
      <ToolbarTitle text={this.props.title} />
      </Toolbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.activeFrame.fileName
  };
}


const mapDispatchToProps = dispatch => {
  return {
  };
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Code_header);