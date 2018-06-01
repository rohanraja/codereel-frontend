import React, { Component} from 'react';
import Paper from 'material-ui/Paper';

import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import {connect} from 'react-redux'
import {nextCalled, prevCalled, stepCalled} from 'actions/codeWalkActions';

export class Controlpanel extends Component {

  constructor(props) {
    super(props);
  }

  onNext()
  {
    this.props.nextStatementClicked();

  }

  onStep()
  {
    this.props.stepIntoClicked();
  }

  onPrev()
  {
    this.props.prevStatementClicked();
  }

  render() {
    const style = {
      textAlign: 'center',
      display: 'inline-block',
    };

    const butStyle = {
      margin: 10,
    };

    return (
      <div>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

      <Paper style={style} zDepth={1} >
      <RaisedButton
        primary={true}
        icon={<i class="material-icons">navigate_before</i>}
        style={butStyle}
        onClick={this.onPrev.bind(this)}
      />
      <RaisedButton
        primary={true}
        icon={<i class="material-icons">redo</i>}
        style={butStyle}
        onClick={this.onStep.bind(this)}
      />
      <RaisedButton
        primary={true}
        icon={<i class="material-icons">navigate_next</i>}
        style={butStyle}
        onClick={this.onNext.bind(this)}
        className="control-panel-next"
      />

      </Paper>
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => {
  return {
    nextStatementClicked : () => dispatch(nextCalled()),
    prevStatementClicked : () => dispatch(prevCalled()),
    stepIntoClicked : () => dispatch(stepCalled()),
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controlpanel);
