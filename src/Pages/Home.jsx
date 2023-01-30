import React, { useState } from 'react';
import MovieCard from '../Components/MovieCard';

const Home = () => {
    const [arrayOfMovies, SetArrayOfMovie] = useState([]);
    const [title, SetTitle] = useState("");
    const [desc, Setdesc] = useState("");
    const [Posterurl, SetPosterurl] = useState("");
    const [rating, SetRating] = useState("");


    const HandelTitle = (event) => {
        SetTitle(event.target.value);
    }
    const Handeldesc = (event) => {
        Setdesc(event.target.value);
    }
    const HandelPosterurl = (event) => {
        SetPosterurl(event.target.value);
    }
    const Handelrating = (event) => {
        SetRating(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        let movie = {title,desc,Posterurl,rating}
        SetArrayOfMovie((preStat)=>{
            return [...preStat , movie ]
        })

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label style={{margin:"20px 50px"}}>
                    Title:
                    <input type="text" value={title} onChange={HandelTitle} />
                </label>

                <label style={{margin:"20px 50px"}}>
                    Description:
                    <input type="text" value={desc} onChange={Handeldesc} />
                </label>


                <label style={{margin:"20px 50px"}}>
                    PosterUrl:
                    <input type="text" value={Posterurl} onChange={HandelPosterurl} />
                </label>

                <label style={{margin:"20px"}}>
                    Rating:
                    <input type="text" value={rating} onChange={Handelrating} />
                </label>


                <input type="submit" value="Submit" style={{display:"block" , margin:"50px auto" , width:"100px"}} />
            </form>
{
    arrayOfMovies.map((elem,index)=>{
        return(
            <div style={{margin:"20px"}}>
            <MovieCard title={elem.title} posterURL={elem.Posterurl} rating={elem.rating} description={elem.desc} index={index} /> 
            </div>
        )

    })

}
        </>

    );
}

export default Home;
