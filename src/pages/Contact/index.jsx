import React, { Component } from 'react'
import Nav from '@components/Nav'
import Profile from '@components/Profile'
import './index.sass'

export default class Contact extends Component {
    state = {
        introduce: 'Focused on functionality, fueled by connection, designed with purpose.',
        contact: [
            {
                key: 'Email',
                text: 'Handsomegwl@gmail.com'
            },
            {
                key: 'Phone',
                text: '189 7151 5585'
            },
        ],
        copyright: '©2021. All Rights Reserved.',
        social: [
            {
                href: '',
                name: 'wechat'
            },
            {
                href: '',
                name: 'dribbble'
            },
            {
                href: '',
                name: 'behance'
            },
            {
                href: '',
                name: 'linkin'
            },
        ]
    }
    render() {
        const {state} = this
        return (
            <div className="contact-container">
                <div className="contact">
                    <Nav></Nav>
                    <article className="contact-article">
                        <Profile
                        introduce={state.introduce}
                        contact={state.contact}
                        social={state.social}
                        ></Profile>
                        <section className="contact-black-spacer">
                            
                        </section>
                    </article>
                    <div className="copyright-container">
                        <span className="copyright-text">
                            {state.copyright}
                        </span>
                    </div>
                </div>
                
            </div>
        )
    }
}
