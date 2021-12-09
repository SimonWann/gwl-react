import React, { Component } from 'react'
import './index.sass'
import Nav from '@components/Nav'

export default class Article extends Component {
    state = {
        title: 'Ensembl',
        p: 'Cook',
        img: {
            href: '',
            alt: ''
        },
        copyright: '©2021. All Rights Reserved.'
    }
    render() {
        return (
            <div className="article">
                <Nav theme="dark"></Nav>
                <article className="article-main">
                    <h3 className="article-main-h3">{this.state.title}</h3>
                    <p className="article-main-p">{this.state.p}</p>
                    <div className="article-main-img"></div>
                </article>
                <div className="article-copyright">{this.state.copyright}</div>
            </div>
        )
    }
}
