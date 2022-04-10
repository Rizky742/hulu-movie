import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import Thumbnail from './Thumbnail'
import axios from 'axios';
import requests from '../utils/request';
import { useEffect, useState } from "react";
import Fade from 'react-reveal/Fade';
function Results() {

    let { genre } = useParams();
    const [searchParams] = useSearchParams();
    let search = searchParams.get("search")
    console.log(search)
    // console.log(`https://api.themoviedb.org/3${requests[genre]?.url}`)

    const [movies, setMovie] = useState([]);
    const [finalGenre, setFinalGenre] = useState('fetchTrending');
    useEffect(() => {
        async function fetchData() {
            
            const request = await axios.get(`https://api.themoviedb.org/3${search ? `/search/movie?api_key=773e4b1574336e237ded907f5c287b0c&query=${search}` : requests[genre ? genre : "fetchTrending"]?.url}`)
            setMovie(request.data.results)
        }
        fetchData()
    },[])
    console.log(finalGenre)

    // console.log(res.id)
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (

        <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {movies.map((result) => (
                // <Fade left>
                    <Thumbnail key={result.id} result={result} />
                // </Fade>
            ))}
        </div>
    )
}

export default Results