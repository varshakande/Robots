import React from 'react';
import {robots} from './robots';
import Robot from './Robot';

const Cardlist = ({robots}) => {
	return (
		<div>
			{
			robots.map((num,index) => {
			return(
			<Robot key={index} id={num.id} name={num.name} email={num.email}/>
			);
			})
			}
		</div>
	);
	
	
}

export default Cardlist;