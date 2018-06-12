import React, { Component} from 'react';
import ObjectInspector from "./ObjectInspector";
import { connect } from 'react-redux';
import {getCurrentScopeVars} from 'selectors/scopeVarsSelector'
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
  var varsData = getCurrentScopeVars(state)
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
