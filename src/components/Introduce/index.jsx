import React, { Component } from 'react'
import './index.sass'

export default class Introduce extends Component {
    render() {
        const {props} = this
        return (
            <div className="introduce-dom">
                {props.text?props.text:''}
            </div>
        )
    }
}
