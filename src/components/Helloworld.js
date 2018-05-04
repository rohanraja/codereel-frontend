import React, { Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';



class Helloworld extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("RENDERING HW");
    return (
      <div>
        
      <h2> Hello Beautiful World </h2>
      <RaisedButton label={this.props.contnt} />
          <DatePicker hintText="Some Hint" />

      </div>
    );
  }
}

export default Helloworld;
