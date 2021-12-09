import React, { Component } from 'react'
import NavMenu from '@components/NavMenu'
import './index.sass'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '@assets/svg/logo-black.svg'
import { ReactComponent as LogoLight } from '@assets/svg/logo-white.svg'
import { motion } from 'framer-motion'

const offsetMotionBySpacer = 1.4

const navVariants = {
    visible: {
        y: [15, 0, 0],
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
            times: [0, 0.4, 0.8],
            delay: offsetMotionBySpacer
        }
    },
    init: {
        y: 0,
        opacity: 0
    }
}

export default class Nav extends Component {
    render() {
        return (
            <motion.div 
            className="Nav"
            animate="visible"
            initial="init"
            variants={navVariants}
            >
                
                <Link to="/work">
                    {this.props.theme === 'dark'?<LogoLight />:<Logo />}
                    {/* <Logo></Logo> */}
                </Link>
                <NavMenu theme={this.props.theme}></NavMenu>
            </motion.div>
        )
    }
}
