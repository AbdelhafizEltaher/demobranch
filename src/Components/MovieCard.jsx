import React from 'react';

const MovieCard = (props) => {
    return (
        <>
            <div className="card" style={{width: "18rem"}} key={props.index}>
                <img src={props.posterURL} className="card-img-top" alt="..." style={{width:"100px" , height:"100px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">{props.rating}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
}

export default MovieCard;
