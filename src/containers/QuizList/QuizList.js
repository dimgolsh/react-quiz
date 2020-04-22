import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import css from './QuizList.module.scss';

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

    render() {
        return (
            <div className={css.QuizList}>
                {this.renderQuizes()}
            </div>
        )
    }
}
