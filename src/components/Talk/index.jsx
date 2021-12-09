import React, { Component, useState, useEffect} from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { Link } from 'react-router-dom'
import './index.sass'
import Social from '@components/Social'
import {ReactComponent as Arrow} from '@assets/svg/arrow-right.svg'

export default function Talk (props)  {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0, 1], [-0, 0])
    const [content, setCount] = useState({
        title: `Starting a new project or\nwant to collaborate with me?`,
        enter: {
            href: '',
            text: 'Let‘s talk'
        },
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
    })


    return (
        <motion.div 
        className="talk"
        style={{
            translateY: y
        }}
        >
            <h3 className="talk-title">{content.title}</h3>
            <Link to="/contact" className="talk-enter">
                <span className="talk-enter-text">{content.enter.text}</span>
                <div className="talk-enter-icon"><Arrow></Arrow></div>
            </Link>
            <section className="talk-social">
                <Social social={content.social} theme="light" ></Social>
                <span className="talk-social-copyright">{content.copyright}</span>
            </section>
        </motion.div>
    )
}
