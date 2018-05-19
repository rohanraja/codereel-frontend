import React, { Component} from 'react';
import "react-json-inspector/json-inspector.css"
var Inspector = require('react-json-inspector');


class ObjectInspector extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    var data = this.props.objectData;

    return (
      <div>
      <Inspector 
        data={ data } 
        search={false} 
      />
      </div>
    );
  }
}

export default ObjectInspector;
