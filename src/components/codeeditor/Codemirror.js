import React, { Component} from 'react';
import CodeMirror from 'react-codemirror';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/ruby/ruby');

import './codestyles.css'



class Codemirror extends Component {

  constructor(props) {
    super(props);
    this.cm = null;

  }

  markLine(cm, lineNo)
  {

    cm.markText({line: lineNo - 1, ch: 0}, {line: lineNo , ch: 0}, {className: "styled-background"});
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

    this.clearAllMarks(cm);
    this.markLine(cm, this.props.activeLine);
    this.jumpToLine(cm ,this.props.activeLine);

    window.cm = cm;
  }

  componentDidMount()
  {
    this.onclick(null);
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

  render() {

    var code = "class Test\n\tbelongs_to: :rohan\n\n\tdef testMethod\n\tend\nend\nclass Test\n\tbelongs_to: :rohan\n\n\tdef testMethod\n\tend\nend\nclass Test\n\tbelongs_to: :rohan\n\n\tdef testMethod\n\tend\nend\nclass Test\n\tbelongs_to: :rohan\n\n\tdef testMethod\n\tend\nend\nclass Test\n\tbelongs_to: :rohan\n\n\tdef testMethod\n\tend\nend\nclass Test\n\tbelongs_to: :rohan\n\n\tdef testMethod\n\tend\nend\nclass Test\n\tbelongs_to: :rohan\n\n\tdef testMethod\n\tend\nend\n";
    var options = {
			lineNumbers: true,
      mode: 'ruby'
		};

    return (
      <div>
        
      <CodeMirror ref={(c: any) => this.cm = c} value={code} options={options} />

      <a onClick={this.onclick.bind(this)}>Mark</a>
      </div>
    );
  }
}

export default Codemirror;
