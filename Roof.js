import React,{Component} from 'react';
import Cardlist from './Cardlist';
import Search from './Search';
import {robots} from './robots.js';
import './Roof.css'
import Scroll from './Scroll';


class Roof extends Component{
	constructor(){
		super()
		this.state = {
			robots:robots,
			searchfield:''
		}
	}

	componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=> response.json())
	.then(users=> {this.setState({robots : users})});
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render(){
		const {robots, searchfield} = this.state;

		const filteredRobots =/*this.state.robots */ robots.filter( robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		//using ternary operator instead of if - else statement
		return (robots.length < 0) ?
			<h1>Loading</h1> :
		(
		<div className='tc'>
			<h1 className='f2 ttu code br2'> Robot Friends </h1>
			<Search searchChange = {this.onSearchChange} />
			<Scroll>
				<Cardlist robots={filteredRobots}/>
			</Scroll>
			
		</div>
		);
	
	}
}

export default Roof;