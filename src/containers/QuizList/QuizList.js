import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import css from './QuizList.module.scss';
import axios from 'axios';
export default class QuizList extends Component {

renderQuizes(){
    return [1,2,3].map((quiz,index)=>{
        return (
            <li key={index}
            >
                <NavLink to={'/quiz/' + quiz}>
                    test {quiz}
                </NavLink>
            </li>
        )
    })
}

componentDidMount(){
    axios.get('https://react-quiz-86ed9.firebaseio.com/quiz.json')
    .then(res => console.log(res))
}

    render() {
        return (
            <div className={css.QuizList}>
                {this.renderQuizes()}
            </div>
        )
    }
}
