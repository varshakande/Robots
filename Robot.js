import React from 'react';
import 'tachyons';


const Robot = (props) => {
	//instead of (props) we can use {name,email, id}
	//const {name,email,id} = props;
	return(
		<div className='bg-gold dib br3 pa3 ma2 grow'>
			<img src={`https://robohash.org/${props.id}?200x200`} alt="image not loaded"/>
			<div>
			<h2> {props.name} </h2>
			<p> {props.email} </p>
			</div>
		</div>
	);
}

export default Robot;