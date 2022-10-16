import React from "react";
import Popup from "./Popup";




const MovieCard = ({movie1}) => {
	return(
		<div className="movie" >

			<div className="flex flex-row w-100 max-w-sm px-4">
				<Popup movie1={movie1} />
				<div></div>
			</div>
			
			<div>
				<img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.title}/>
			</div>

			<div>
				<span>{movie1.Type}</span>
				<h3>{movie1.Title}</h3>
				
			</div>
		</div>
	);
}

export default MovieCard;