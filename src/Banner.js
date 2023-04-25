import { React,useEffect,useState } from 'react'
import './Banner.css'
import instance from './instance'
import requests from './requests'


function Banner() {

  const base_url = "https://image.tmdb.org/t/p/original";

    const [movie,setMovie]=useState({})

    const fetchData = async ()=>{
     const response = await instance.get(requests.fetchTrending)
     setMovie(response.data.results[
       Math.floor(Math.random()*response.data.results.length)
     ]);
    }

    // console.log(movie);

    function truncate(str,n){                             //created truncate funtion to cut the words if length of words is overflowing 
      return str?.length?str?.substr(0,n-1)+'...':str
    }

    useEffect(()=>{
        fetchData()
    },[]
    )

  return (
    <>
   
      <div className='banner'  style={{backgroundImage:`url(${base_url}${movie.backdrop_path})`}}>
        <div className='bannerContent'>
          <h1 className='title'>
          {movie.title}
          </h1>
          <p className='overview'>
            {truncate(movie?.overview,250)}
          </p>
        </div>
      </div>
   
    </>
  )
}

export default Banner