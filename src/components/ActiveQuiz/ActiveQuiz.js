import React from 'react'

import classes from './ActiveQuiz.module.scss';

const ActiveQuiz = props =>{
    return (
        <div className = {classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>2</strong>&nbsp;
                    Как дела?
                </span>
                <small>4 vp 12</small>
            </p>
            <ul className="li">1</ul>
            <ul className="li">1</ul>
            <ul className="li">1</ul>
            <ul className="li">1</ul>
        </div>
    )
}

export default ActiveQuiz