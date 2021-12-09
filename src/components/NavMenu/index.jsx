import React, { Component } from 'react'
import "./index.sass"
import { Link } from 'react-router-dom'

export default class NavMenu extends Component {
    state = {
        menuItems: [
            {
                name: 'work',
                text: 'Work',
                href: '/work'
            },
            {
                name: 'contact',
                text: 'Contact',
                href: '/contact'
            }
        ]
    }
    render() {
        const { state } = this
        return (
            <ul className={"NavMenu " + this.props.className}>
                {state.menuItems.map( val => (
                    <li className={this.props.theme === 'dark'?'NavMenu-li NavMenu-li-white':"NavMenu-li"}>
                        <Link to={val.href}>
                            {val.text}
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }
}
