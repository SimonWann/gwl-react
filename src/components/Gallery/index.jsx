import React, { Component } from 'react'
import Card from '@components/Card'
import { Link } from 'react-router-dom'
import './index.sass'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import { Mousewheel, Keyboard } from 'swiper';
import 'swiper/swiper.scss'
import 'swiper/modules/scrollbar/scrollbar.scss'
import 'swiper/modules/mousewheel/mousewheel.scss'
import 'swiper/modules/keyboard/keyboard.scss'
import { motion } from 'framer-motion'
import { breakpoints } from '@/conf/breakpoint'

const offsetMotionBySpacer = 1.4


const CardVariants = {
    start: {
        opacity: 0,
        x: 200
    },
    end: (i) => ({
        transition: {
            duration: 1,
            delay: ( i + 1 ) * 0.2 + 0.8 + offsetMotionBySpacer,
            ease: [0.5, 1, 0.9, 1],
            times: [0, 0.6, 1]
        },
        opacity: [0, 1, 1],
        x: 0
    })
}

export default class Gallery extends Component {
    render() {
        const { state, props } = this
        return (
            <div className={props.className?'gallery '+props.className:'gallery'}>
                <Swiper
                modules={[Mousewheel, Keyboard]}
                mousewheel={{
                    mousewheel: true,
                    releaseOnEdges: true
                }}
                keyboard={true}
                className='gallery-swiper'
                breakpoints={breakpoints}
                >
                    {(props.card ?? []).map((item, index) => (
                        <SwiperSlide>
                            <Link to="/article">
                                <motion.div
                                animate="end"
                                initial="start"
                                variants={CardVariants}
                                custom={index}
                                >
                                    <Card 
                                    className="gallery-card"
                                    title={item.title}
                                    p={item.p}
                                    img={item.img}
                                    ></Card>
                                </motion.div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )
    }
}
