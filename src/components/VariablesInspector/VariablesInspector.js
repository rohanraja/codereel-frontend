import React, { Component} from 'react';
import ObjectInspector from "./ObjectInspector";
import { connect } from 'react-redux';
import {getActiveVarsData} from 'selectors/simpleVarStateSelector'
import {getActiveCallStack} from 'selectors/callStackSelectors'

export class VariablesInspector extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var data = this.props.varsData;

    // Todo - Extract callstack component
    const clstk = this.props.callStack.map( (mthname) => (

      <li>{mthname}</li>
    ));

    return (
      <div>
        <ObjectInspector 
          objectData = {data}
        />
      {clstk}
      </div>
    );
  }
}



function mapStateToProps(state) {
  var varsData = getActiveVarsData(state)
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
