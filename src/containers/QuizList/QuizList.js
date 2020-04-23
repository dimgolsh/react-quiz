import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import css from './QuizList.module.scss';
import axios from 'axios';
export default class QuizList extends Component {

    state = {
        quizes: []
    }
renderQuizes(){
    return this.state.quizes.map((quiz,index)=>{
        return (
            <li key={quiz.id}
            >
                <NavLink to={'/quiz/' + quiz.id}>
                    test {quiz.name}
                </NavLink>
            </li>
        )
    })
}

async componentDidMount(){
    try {
        const res = await axios.get('https://react-quiz-86ed9.firebaseio.com/quizes.json')
       const quizes = [];
       Object.keys(res.data).forEach((key,index)=>{
           quizes.push({
               id:key,
               name: `Test ${index+1}`
           })
       })
        this.setState({quizes})
    } catch (error) {
        
    }

}

    render() {
        return (
            <div className={css.QuizList}>
                {this.renderQuizes()}
            </div>
        )
    }
}
