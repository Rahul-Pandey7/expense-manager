import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Income extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            income: '',
            amount: '',
            name:'',
        }
    }
    add = (e) => {
        console.log("Income aaja bhai")
        axios({
            method: 'post',
            url: 'http://localhost:3000/user/add',
            data: {income: this.state.income, amount: this.state.amount, name:this.state.name}
        })
            .then((response) => {
                console.log("reponse is",response)
            })
            .catch((err) => alert(err))
    }
    render() {
        return (
            <div className="jumbotron">
                <h1 className="text-center">Add Income Details</h1>
               <p className="text-center mt-4"><input type="text" name="amount" placeholder="amount" value={this.state.amount} onChange={(e) => this.setState({ amount: e.target.value })} />
                <input type="text" name="income" placeholder="income" value={this.state.income} onChange={(e) => this.setState({ income: e.target.value })} />
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
             <Link to="/home"><button type="button" className="btn-primary btn ml-2" onClick={this.add}>Add Income</button></Link></p>
            </div>
        );
    }
}