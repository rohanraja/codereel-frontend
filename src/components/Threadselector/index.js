import React, { Component} from 'react';
import { connect } from 'react-redux';
import './threadselector.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// -- import_hook --

export class Threadselector extends Component {

  constructor(props) {
    super(props);
  }

  onListItemClick(thid)
  {
    return () => {
      this.props.threadButtonClicked(thid);
    };
  }

  render() {

      // TODo - Extract listItem to SubComponent

    const listItems = this.props.threadInfos.map((thInfo) => 
        <ListItem button 
            key={thInfo[1]} 
            onClick={this.onListItemClick(thInfo[1])} 
            className={thInfo[1] === this.props.activeThreadRunId ? "activeThread" : "" } 
          >
            <ListItemText primary={thInfo[0]}  />
          </ListItem>
    );
    return (
      <div >
      <List component="nav">
        {listItems}
      </List>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}


const mapDispatchToProps = dispatch => {
  return {
  };
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Threadselector);
