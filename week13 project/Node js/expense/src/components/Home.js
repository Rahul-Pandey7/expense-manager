import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            income: '',
            amount: '',
            array1: [],
            saving: '',
        }
    }
    show = (e) => {
        console.log("punda mavan")
        axios({
            method: 'get',
            url: 'http://localhost:3000/income',
        })
            .then((response) => {
                console.log("reponse is", response)
                this.setState({
                    array: [...response.data.user]
                });
            })
            .catch((err) => alert(err))
    }
    expense = (e) => {
        console.log("punda mavan")
        axios({
            method: 'get',
            url: 'http://localhost:3010/expense',
        })
            .then((response) => {
                console.log("reponse is", response)
                this.setState({
                    array1: [...response.data.user]
                });
            })
            .catch((err) => alert(err))
    }
    saving = (e) => {
        let totalIncome = this.state.array.reduce(function (acc, item) {
            return acc + Number(item.amount);
        }, 0);
        let totalExpense = this.state.array1.reduce(function (acc, item) {
            return acc + Number(item.expense_amount);
        }, 0);
        this.setState({
            saving: totalIncome - totalExpense
        });
        console.log(this.state.saving)
    }
    render() {
        console.log(this.state.array1)
        return (
            <div>
                <div className="jumbotron">
                    <button type="button" className="btn-primary btn mt-5" onClick={this.show}>See All Incomes</button>
                    <p className="text-center"><button type="button" className="btn-primary btn mt-n5 ml-n4" onClick={this.saving}>See Saving</button></p>
                    <button type="button" className="btn-primary btn float-right" style={{ marginTop: "-70px" }} onClick={this.expense}>See All Expenses</button>
                    <button type="button" className="btn-primary btn"
                        onClick={() => this.props.history.push(`/income`)}>Add Income</button>
                    <div className="container text-center" style={{ width: "25rem", marginTop: "-50px" }}>
                        <div className="jumbotron" style={{
                            background: "linear-gradient(to right, #c31432, #240b36)",
                            marginTop: "10px", width: "20rem"
                        }}>
                            <h5 className="text-center text-light">Your saving is:{this.state.saving}$</h5>
                        </div>
                    </div>
                    <button type="button" className="btn-primary btn float-right" style={{ marginTop: "-160px" }}
                        onClick={() => this.props.history.push(`/expense`)}>Add Expense</button>
                </div>
                <div className="container-fluid bg-light">
                    <div className="row">
                        <div className="col-6 mt-5">
                            <h1 className="ml-5 text-center" style={{ fontFamily: "Livvic, sans-serif" }}>Income Details</h1>
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Source</th>
                                        <th scope="col">Income</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.array.map((item, index) => {
                                        return (
                                            <React.Fragment>
                                                <tr>
                                                    <th key>sdasdas</th>
                                                    <td>{item.name}</td>
                                                    <td>{item.income}</td>
                                                    <td>{item.amount}</td>
                                                </tr>
                                            </React.Fragment>

                                        );

                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="col-6 mt-5" style={{ width: "25rem" }}>
                            <h1 className="ml-5 text-center" style={{ fontFamily: "Livvic, sans-serif" }}>Expense Details</h1>
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Source</th>
                                        <th scope="col">Income</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.array1.map((item, index) => {
                                        return (
                                            <React.Fragment>
                                                <tr>
                                                    <th key>sdasdas</th>
                                                    <td>{item.name}</td>
                                                    <td>{item.expense}</td>
                                                    <td>{item.expense_amount}</td>
                                                </tr>
                                            </React.Fragment>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}