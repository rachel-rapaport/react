import React from 'react'
import  {Routes,Route,Link,Outlet} from "react-router-dom"
import './layoutStyle.css';


 function TopNav(){
    return(
    <>
    <nav className='top-nav'>
        <Link to={"/sign"}>---sign--</Link>
        <Link to={'/about'}>----about-----</Link>
        <Link to={'/tips'}>-----tips----</Link>
        <Link to={'/blogs'}>-----blogs------</Link>
        <Link to={'/destinations'}>--------destinations--------</Link>
        <Link to={"/home"}>---home---</Link>
    </nav>
<Outlet/>
</>
    );
}
export default TopNav;