import {Link } from 'react-router-dom';
import image from '../assets/react.svg'
export default function Navbar(){
    return (
    <>
    <nav className="navbar">
    
    <h1>Midnight Mover</h1>
    <img className="logo" src={image}></img>

    
    <div className="links">
    <Link to="/home">Home</Link>
    <Link to="/input">Input</Link>
    </div>
    </nav>
    </>)
}

