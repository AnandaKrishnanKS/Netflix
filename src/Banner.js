import { React,useEffect,useState } from 'react'
import './Banner.css'
import instance from './instance'
import requests from './requests'


function Banner() {

    const [movie,setMovie]=useState({})

    const fetchData = async ()=>{
     const response = await instance.get(requests.fetchTrending)
     setMovie(response.data.results[
       Math.floor(Math.random()*response.data.results.length)
     ]);
    }

    // console.log(movie);

    useEffect(()=>{
        fetchData()
    },[]
    )

  return (
    <>
    <div>

       <h1> Banner</h1>

    </div>
    </>
  )
}

export default Banner