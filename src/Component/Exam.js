import React, { Component } from 'react'
import Papa from 'babyparse'

class Exam extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text : ""
    }
  }

  componentDidMount(){
    this.readTextFile(require('../Component/Book.csv'))
  }

  readTextFile = file => {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var allText = rawFile.responseText;
					this.setState({
						text: allText
					});
				}
			}
		};
		rawFile.send(null);
  };
  
  generate() {
    Papa.parse(this.state.text, {
      complete: function (results) {
        console.log(results);
      }
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => { this.generate() }} bsStyle="primary">OK</button>
      </div>
    );
  }
}

export default Exam;