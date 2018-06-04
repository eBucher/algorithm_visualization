import React, { Component } from 'react';
import 'components/codeBox/CodeBox.css';

class CodeBox extends React.Component{

	constructor(){
		super();
		this.linesOfCode = null;
	}

	/*
	Replaces four consecutive space characters with 4 characters that will
	be rendered as spaces in the HTML
	*/
	cleanLine = (line) => {
		return line.replace(/    /g, "\u00A0\u00A0\u00A0\u00A0")
	}

	generateLinesOfCode = () => {
		var t = this.props.highlightedLines;
		var linesOfCode = this.props.linesOfCode.map(this.buildLine(this.props.highlightedLines, this.cleanLine));
		return linesOfCode;
	}

	buildLine = (highlightedLines, cleanLineCallback) => {
		console.log(highlightedLines);
		return function(line, index){
			if(highlightedLines == index){
				return <div style={{backgroundColor: "red", whiteSpace: "pre-line"}}>{cleanLineCallback(line)}</div>
			}
			return <div style={{whiteSpace: "pre-line"}}>{cleanLineCallback(line)}</div>
		}
	}

	render(){

		return (
			<div id="codeBox">{this.generateLinesOfCode()}</div>
		)
	}

}

export default CodeBox;
