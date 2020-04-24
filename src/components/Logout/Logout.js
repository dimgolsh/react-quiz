import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/auth'
import { Redirect } from 'react-router-dom'

export class Logout extends Component {
    render() {
        return (
            <div>
                <Redirect to={'/'}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

function mapDispatchToProps (dispatch) {
    return {
        logout: ()=> dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
