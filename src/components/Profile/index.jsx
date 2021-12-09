import React, { Component } from 'react'
import Social from '@components/Social'
import './index.sass'

export default class Profile extends Component {
    state = {
        copyright: '©2021. All Rights Reserved.'
    }
    render() {
        const {state, props} = this
        return (
            <main className={this.props.className?'profile '+this.props.className:"profile"}>
                <section className="profile-introduce">
                    {this.props.introduce}
                </section>
                <section className="profile-contact">
                    <ul className="profile-contact-ul">
                        {(props.contact ?? []).map(val => (
                            <li className="profile-contact-li">
                                <span className="profile-contact-li-key">{val.key}</span>
                                <span className="profile-contact-li-value">{val.text}</span>
                            </li>
                        ) )} 
                    </ul>
                </section>
                <section className="profile-social-icons">
                    <Social social={props.social}></Social>
                </section>
                <section className="profile-copyright">
                    <span>{state.copyright}</span>
                </section>
            </main>
        )
    }
}
