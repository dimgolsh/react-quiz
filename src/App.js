import React from 'react';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';

import {Route, Switch, withRouter} from 'react-router-dom';



import './App.css';
import { connect } from 'react-redux';
import  Logout  from './components/Logout/Logout';
import { authLogin } from './store/actions/auth';

class App extends React.Component {

  componentDidMount(){
    this.props.authLogin()
  }
  render(){

    let routes = (
      <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/quiz/:id" component={Quiz} />
      <Route path="/" exact component={QuizList} />
    </Switch>
    )

    if (this.props.isAuthenticated){
      routes = (
        <Switch>
        <Route path="/quiz-creator" component={QuizCreator} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={QuizList} />
      </Switch>
      )
    }
    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
 
}
function mapStateToProps(state){
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch){
  return {
    authLogin: () => dispatch(authLogin())
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
