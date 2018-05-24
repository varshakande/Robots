import React from 'react';

const Search = ({searchChange, searchfield}) => {

	return(
			<div>
			<input type="search"
				   name='search' 
				   placeholder="Search for Robos" 
				   onChange={searchChange}/>

			</div>

	);
}

export default Search;