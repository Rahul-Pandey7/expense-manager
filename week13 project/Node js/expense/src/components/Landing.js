import React from "react";
import {Link} from 'react-router-dom';

export default class Landing extends React.Component{
    render(){
        return (
            <div>
                <nav class="navbar bg-dark">
	<a class="navbar-brand " href="index.html"><img src="logo.png" style={{height: "50px", width: "50px"}}/></a>
  <h1 class="text-light text-center">Expense Manager</h1>
	<form class="form-inline navbar-brand">
	<Link to="/login"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Register/Login</button></Link>
	</form>
</nav>
<div id="carouselExampleInterval" class="carousel slide mt-5" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="1000">
      <img src="https://images.unsplash.com/photo-1566482042436-069399d7a8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80" class="d-block w-1" alt="..." style={{height: "600px", width: "100%"}}/>
    </div>
    <div class="carousel-item" data-interval="100">
      <img src="https://images.unsplash.com/photo-1565372519925-842b7778defb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" class="d-block w-1" alt="..." style={{height: "600px", width: "100%"}}/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" class="d-block w-1" alt="..." style={{height: "600px", width: "100%"}}/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

	

<div class="jumbotron jumbotron-fluid mt-5">
	<h1 class="text-center"><u>What we do?</u></h1>
  <div class="container">
    <div class="row">
      <div class=" col-sm">
        <img src="https://image.flaticon.com/icons/svg/321/321798.svg" class="col-4 offset-3 img-fluid"/>
        <h4 class="offset-2 mt-3">Saving Manager</h4>
        <p>We will take care of your Saving details</p>
        <p class="ml-4">Feels like your own Secretary</p>
        <p class="ml-5">100% Safe and Secure</p>
      </div>
      <div class="col-sm">
        <img src="https://image.flaticon.com/icons/svg/1611/1611261.svg" class="col-4 offset-4 img-fluid"/>
        <h4 class="offset-3 mt-3">Income Manager</h4>
        <p class="ml-3">We will keep secure and safe your all Income</p>
        <p class="offset-1">We will manage your all Income Sources</p>
        <p class="offset-2">Keep Track of every information</p>
      </div>
      <div class="col-sm container-fluid">
        <img src="https://image.flaticon.com/icons/png/512/1889/1889614.png" class="col-4 offset-4 img-fluid"/>
        <h4 class="offset-3 mt-3">Expense Manager</h4>
        <p class="text-center">We will take care of all your expenses</p>
        <p class="text-center">So your all data will be safe with us</p>
        <p class="text-center">We maintain our customers privacy</p>
      </div>
    </div>
  </div>
</div>

<div class="jumbotron jumbotron-fluid mt-5">
  <h1 class="text-center"><u>Our Team</u></h1>
  <div class="container">
    <div class="row">
      <div class=" col-sm">
        <img src="rahul.jpg" class="rounded-circle col-4 offset-3 img-fluid"/>
        <h4 class="offset-2 mt-3">Rahul Pandey</h4>
        <p class="offset-3">Founder</p>
        <p class="ml-5">MERN Stack Developer</p>
        <p class="ml-5">Masai School, Bengaluru</p>
      </div>
      <div class="col-sm">
        <img src="nrupul.jpeg" class=" rounded-circle col-4 offset-4 img-fluid"/>
        <h4 class="offset-4 mt-3">Nrupul Dev</h4>
        <p class="offset-5">CTO</p>
        <p class="offset-2">Data Analyst, Full Stack Developer </p>
        <p class="offset-5">IIT, Kanpur</p>
      </div>
      <div class="col-sm container-fluid">
        <img src="anuj.png" class="rounded-circle col-4 offset-4 img-fluid"/>
        <h4 class="offset-3 mt-3">Anuj Choudhary</h4>
        <p class="text-center">Co-Founder</p>
        <p class="text-center">MERN Stack / UI/ UX Developer</p>
        <p class="text-center">Masai School, Bengaluru</p>
      </div>
    </div>
  </div>
</div>





<footer class="page-footer font-small bg-dark pt-4">
  <div class="container">
    <ul class="list-unstyled list-inline text-center py-2">
      <li class="list-inline-item">
        <h5 class="mb-1 text-light">Register for free</h5>
      </li>
      <li class="list-inline-item">
        <Link to="/login"><button type="submit" class="btn btn-outline-success btn-rounded" style={{height: "50px", width: "200px"}}>Register/Login</button></Link>
      </li>
    </ul>
  </div>
<div class="footer-copyright text-center py-3 text-light">© 2018 Copyright:</div>
</footer>

</div>
            // </div>
        )
    }
}