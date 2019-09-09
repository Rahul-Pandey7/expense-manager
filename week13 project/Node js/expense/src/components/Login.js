import React from "react";
import { Link } from 'react-router-dom';

export class Login extends React.Component {

    render() {
        return (
            <div className="jumbotron">
                <div class="container col-3" style={{ marginTop: "10%", backgroundColor: "rgba(0,0,0,0.5)",marginTop:"30px",  backgroundPosition: 'center',
                backgroundImage: "url(https://images.unsplash.com/photo-1563365553-90922584c32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80)",
                backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <h1>Let's Go</h1>
                    <form >
                        <div class="form-group mt-5">
                            <label className="font-weight-bold">Email address</label>
                            <input type="email" class="form-control col-4 text-center text-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="text-dark font">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label className="font-weight-bold" for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control col-4 text-center" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <Link to="/home"><button type="submit" class="btn btn-primary">Register/Login</button></Link>
                    </form>
                </div>
            </div>
        );
    }
}