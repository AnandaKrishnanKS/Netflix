import { React,useEffect,useState } from 'react'
import './Navbar.css'

function Navbar() {

    const [show,setShow]=useState(false)

    useEffect(()=>{
       window.addEventListener('scroll',()=>{
        if(window.scrollY>400){
            setShow(true)
        }else{
            setShow(false)
        }
       }) 
    },[])

    console.log(show);

  return (
    <>
        <div className= {`nav ${show && 'navBlack'}`}>
            <img 
            style={{width:'170px'}}
            src='https://imgs.search.brave.com/gFC6bzOxK7jrtr_IikBb3Mw52j_bbEz4Iz-zYYO78d4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L25ldGZsaXgtbG9n/by1kcmF3aW5nLXBu/Zy0xOS5wbmc'
            alt='...'
            />
        </div>
    </>
  )
}

export default Navbar