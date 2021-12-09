import React, { Component } from 'react'
import './index.sass'
import getIcon from '@util/getIcon'

export default class Social extends Component {
    getIcon(name) {
        return getIcon(name)
    }
    render() {
        const {state, props} = this
        return (
            <ul className="social">
                {(props.social ?? []).map( val=> (
                    <li className="social-icons-li">
                        <a href={val.href} target="_blank" className={props.theme === 'light'?'social-icons-li-a-light':"social-icons-li-a"}>
                            {this.getIcon(val.name)}
                        </a>
                    </li>
                ))}   
            </ul>
        )
    }
}
