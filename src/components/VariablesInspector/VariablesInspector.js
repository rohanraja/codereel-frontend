import React, { Component} from 'react';
import ObjectInspector from "./ObjectInspector";
import { connect } from 'react-redux';

export class VariablesInspector extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var data = this.props.varsData;

    return (
      <div>
        <ObjectInspector 
          objectData = {data}
        />
      </div>
    );
  }
}


import {getActiveVarsData} from '../controlpanel/selectors'

function mapStateToProps(state) {
  var varsData = getActiveVarsData(state)
  console.log(varsData.local.i);
  return {
    varsData
  };
}


const mapDispatchToProps = dispatch => {
  return {
  };
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(VariablesInspector);
