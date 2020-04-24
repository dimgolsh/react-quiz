import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.logout();
  }

  render() {
    return (
      <div>
        <Redirect to={"/"} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  };
}
export default connect(null, mapDispatchToProps)(Logout);
