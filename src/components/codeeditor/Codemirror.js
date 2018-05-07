import React, { Component} from 'react';
import CodeMirror from 'react-codemirror';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/ruby/ruby');

import './codestyles.css'



export class Codemirror extends Component {

  constructor(props) {
    super(props);
    this.cm = null;
  }

  static defaultProps = {
    code: "",
    activeLine: 0,
    completedLines: [],
    torunLines: []
  };

  markLineAsActive(cm, lineNo)
  {
    this.markLine(cm, lineNo, "active-codeline");
  }

  markLineAsCompleted(cm, lineNo)
  {
    this.markLine(cm, lineNo, "completed-codeline");
  }

  markLineAsTorun(cm, lineNo)
  {
    this.markLine(cm, lineNo, "torun-codeline");
  }

  markLine(cm, lineNo, className)
  {

    cm.markText({line: lineNo, ch: 0}, {line: lineNo+1 , ch: 0}, {className: className});
  }

  clearAllMarks(cm)
  {
    var marks = cm.getAllMarks();
    marks.forEach(function (value) {
      value.clear();
    });
  }

  onclick(e)
  {
    var inst = this.cm.getCodeMirrorInstance();
    console.log(inst);
    var cm = this.cm.getCodeMirror();
    this.cm2 = cm;

    this.clearAllMarks(cm);
    this.markLineAsActive(cm, this.props.activeLine);

    var cb = this.markLineAsCompleted.bind(this);
    this.props.completedLines.forEach(function (value) {
      cb(cm, value);
    });

    var cb2 = this.markLineAsTorun.bind(this);
    this.props.torunLines.forEach(function (value) {
      cb2(cm, value);
    });

    this.jumpToLine(cm ,this.props.activeLine);

    window.cm = cm;
  }

  componentDidMount()
  {
    this.onclick(null);
    this.hookGutterLineNoClicked(this.cm2);
    this.hookWordHighlightEvent(this.cm2);
  }

  componentDidUpdate(prevProps, prevState, snapshot)
  {
    this.onclick(null);
  }

  jumpToLine(editor, i) { 
    var t = editor.charCoords({line: i, ch: 0}, "local").top; 
    var middleHeight = editor.getScrollerElement().offsetHeight / 2; 
    editor.scrollTo(null, t - middleHeight - 5); 
  } 

  hookWordHighlightEvent(editor)
  {
    var callBack = this.props.symbolClicked ;

    editor.on('cursorActivity', function() {
        var A1 = editor.getCursor().line;
        var A2 = editor.getCursor().ch;

        var B1 = editor.findWordAt({line: A1, ch: A2}).anchor.ch;
        var B2 = editor.findWordAt({line: A1, ch: A2}).head.ch;

        var word = editor.getRange({line: A1,ch: B1}, {line: A1,ch: B2}) ;
        // console.log(editor.getRange({line: A1,ch: B1}, {line: A1,ch: B2})); 
        callBack(word, A1, A2);
    });
  }

  hookGutterLineNoClicked(editor)
  {
    var callBack = this.props.lineClicked ;

    editor.on("gutterClick", function(inst, lineno) { 
      // console.log(lineno); 
      callBack(lineno);
    });
  }

  render() {

    var code = this.props.code;
    var options = {
			lineNumbers: true,
      mode: 'ruby',
      firstLineNumber: 0
		};

    return (
      <div>
      <CodeMirror 
      ref={(c: any) => this.cm = c} value={code} options={options} 
      
      />
      </div>
    );
  }
}


import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    code : state.code,
    activeLine: state.activeLineNo
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Codemirror);

