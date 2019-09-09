import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Expense extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            expense: '',
            expense_amount: '',
            name:'',
        }
    }
    add = (e) => {
        console.log("Income aaja bhai")
        axios({
            method: 'post',
            url: 'http://localhost:3010/user/add',
            data: {expense:this.state.expense, expense_amount:this.state.expense_amount, name:this.state.name}
        })
            .then((response) => {
                console.log("reponse is", response)
            })
            .catch((err) => alert(err))
    }
    render() {
        return (
            <div className="jumbotron">
                <h1 className="text-center">Add Expense Details</h1>
               <p className="text-center mt-4"><input type="text" name="expense_amount" placeholder="amount" value={this.state.expense_amount} onChange={(e) => this.setState({ expense_amount: e.target.value })} />
                <input type="text" name="expense" placeholder="expense" value={this.state.expense} onChange={(e) => this.setState({ expense: e.target.value })} />
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />

             <Link to="/home"><button type="button" className="btn-primary btn ml-2" onClick={this.add}>Add Expense</button></Link></p>
            </div>
        );
    }
}