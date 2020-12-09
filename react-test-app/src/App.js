import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';


class ListItem extends React.Component{
	constructor(props){
		super(props);
		
		const chaire = <Item name = 'chaire'/>;
		const table = <Item name = 'chaire'/>;
		
		this.state = {
			counter : 2,
			addItem : '',
			list : [chaire, table]
			
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	
	handleChange(e){
		this.setState({addItem : e.target.value});
	}
	
	handleSubmit(e){
		e.preventDefault();
		let newConter = this.state.counter + 1;
		this.setState({counter : newConter});
		const newItem = <Item name= {this.state.addItem}/>; 
		let newList = this.state.list;
		newList.push(newItem);
		this.setState({list : newList});
	}
	
	handleClick(e){
		
	}
	

	render(){
		return(
			<div>
			<p>{this.state.counter} Item found</p>
			<form>
				<input type='text' onChange={this.handleChange}/>
				<input type='submit' value='add' onClick={this.handleSubmit}/>
				<List list={this.state.list}/>
			</form>
			
			</div>
		);
	}
}

function List(props){
	return(props.list);
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
    </div>
  );
}

export default App;
