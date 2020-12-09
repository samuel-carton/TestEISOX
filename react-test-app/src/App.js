import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class ListItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			counter : 3,
			addItem : '',
			list : ['chaire', 'table', 'plate']
			
		};
		//this.handleChange = this.handleChange.bind(this);
		//this.handleSubmit = this.handleSubmit.bind(this);
	}

	
	handleChange(e){
		//this.setState(addItem : e.target.value.toString);
	}
	
	handleSubmit(e){
	//	this.state.list.append(this.state.addItem);
	//	this.setState(counter : this.counter++)
	//	e.preventDefault;
	}
	
	handleClick(e){
		
	}
	
	render(){
		return(
			<div>
			<p>{this.state.counter} Item found</p>
			<form>
				<input type='text' onChange={this.handleChange}/>
				<input type='submit' value='add'/>
			</form>
			</div>
		);
	}
}

function Item(props){
	return(
		<div>
		<p>{props.name}</p>
		<button onClick={props.handleClick}>X</button>
		</div>
	);
}

function App() {
  return (
    <div>
      <h1>Item list</h1>
      <ListItem/>
      <Item name="papper"/>
    </div>
  );
}

export default App;
