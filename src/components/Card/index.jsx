import React, { Component } from 'react'
import './index.sass'

export default class Card extends Component {
    render() {
        const { props } = this
        return (
            <section className={props.className?"card "+ this.props.className:'card'}>
                <div className="card-img-container">
                    <img src={props.img?.href} alt={props.img?.alt} />
                </div>
                <h3 className="card-title">{props.title}</h3>
                <p className="card-p">{props.p}</p>
            </section>
        )
    }
}
