import React, { Component} from 'react';
import ObjectInspector from "./ObjectInspector";
import { connect } from 'react-redux';
import {getActiveVarsData} from '../controlpanel/selectors'

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



function mapStateToProps(state) {
  var varsData = {}; //getActiveVarsData(state)
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
