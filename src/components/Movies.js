import React, { useEffect, useState } from "react";


const Movies = ({title, image, rating}) => {
    return (
      <div className="movies">
        <div>{title}</div>
        <img src={image} />
        <div>{rating}</div>
      </div>
    );    
}

export default Movies;