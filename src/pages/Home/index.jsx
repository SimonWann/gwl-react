import React, { Component } from 'react'
import './index.sass'
import { motion, useViewportScroll } from 'framer-motion'
import Nav from '@components/Nav'
import Introduce from '@components/Introduce'
import testPhoto from '@assets/img/text-card.png'
import Gallery from '@components/Gallery'
import Talk from '@components/Talk'

// const { scrollYProgress } = useViewportScroll()
// const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

const offsetMotionByNav = 0.4
const offsetMotionBySpacer = 1.4

const liVariants = {
    visible: i => ({
        y: -46.12,
        transition: {
            delay: ( i + 1 ) * 0.08 + offsetMotionBySpacer + offsetMotionByNav,
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],

        }
    }),
    init: {
        y: 0
    }
}

const spacerVariant = {
    start: {
        x: '-100vw',
    },
    end: {
        x: ['-100vw', '0vw', '100vw'],
        // x: '100vw',
        transition: {
            duration: 1.4,
            ease: [0.5, 0, 0.1, 1],
            times: [0, 0.5, 1],
            
        }
    }
}

export default class Home extends Component {
    constructor() {
        super()
    }
    state = {
        introduce: [
            {
                text: 'Focused on'
            },
            {
                text: 'functionality,'
            },
            {
                text: 'fueled by'
            },
            {
                text: 'connection,'
            },
            {
                text: 'designed with'
            },
            {
                text: 'purpose.'
            }
        ],
        introduceSmall: [
            {text: 'Focused on functionality,'},
            {text: 'fueled by connection, designed with'},
            {text: 'purpose.'}
        ],
        gallery: [
            {
                title: 'Ensembl',
                p: 'Cook',
                img: {
                    alt: 'test photo',
                    href: testPhoto
                }
            },
            {
                title: 'Ensembl',
                p: 'Cook',
                img: {
                    alt: 'test photo',
                    href: undefined
                }
            },
        ]
    }

    render() {
        const { state } = this
        return (
        <div className="home">
            <motion.div 
            className="move-spacer"
            initial="start"
            animate="end"
            variants={spacerVariant}
            >
                <div className="move-spacer-item-black"></div>
                <div className="move-spacer-item-white"></div>
            </motion.div>
            <div className="white-screen-spacer"
            ></div>
            <div className="home-first">
                <Nav></Nav>
                <artice className="home-content">
                    <Introduce
                    text={
                        <motion.ul 
                        className="introduce-ul"
                        >
                            {state.introduce.map((val, index) => (
                            <li
                            className="introduce-li introduce-li-md"
                            >
                                <motion.div 
                                className="introduce-li-white-spacer"
                                >
                                </motion.div>
                                <motion.div 
                                className="introduce-li-value"
                                custom={index}
                                animate="visible"
                                initial="init"
                                variants={liVariants}
                                >{val.text}</motion.div>
                                
                            </li>
                            ))}
                            {state.introduceSmall.map((val, index) => (
                                <li
                                className="introduce-li introduce-li-sm"
                                >
                                    <motion.div 
                                    className="introduce-li-white-spacer"
                                    >
                                    </motion.div>
                                    <motion.div 
                                    className="introduce-li-value"
                                    custom={index}
                                    animate="visible"
                                    initial="init"
                                    variants={liVariants}
                                    >{val.text}</motion.div>
                                    
                                </li>
                            ))}
                        </motion.ul>
                        
                    }
                    ></Introduce>
                    <Gallery
                    className="home-gallery"
                    card={state.gallery}
                    ></Gallery>
                </artice>
            </div>
            <div 
            className="home-second"
            
            >
                <Talk></Talk>
            </div>
        </div>
        )
    }
}
