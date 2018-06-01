import React, { Component} from 'react';
import ObjectInspector from "./ObjectInspector";
import { connect } from 'react-redux';
import {getActiveVarsData} from 'selectors/varStateSelectors'
import {getActiveCallStack} from 'selectors/callStackSelectors'

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
      {this.props.callStack}
      </div>
    );
  }
}



function mapStateToProps(state) {
  var varsData = {}; //getActiveVarsData(state)
  var callStack = getActiveCallStack(state);
  return {
    varsData,
    callStack
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
