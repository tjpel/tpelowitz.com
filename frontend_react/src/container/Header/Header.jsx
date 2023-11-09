import React from 'react'
import {motion} from 'framer-motion'

import {images} from '../../constants'
import {AppWrap} from '../../wrapper'

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}
const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0,1]}}
        transition={{duration: 0.5}}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, my name is</p>
              <h1 className='head-text' style={{color:"#4e6c50"}}>Thomas</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Bioinfromatics Student</p>
            <p className='p-text'>Lead Instructor @ AI Camp</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0,1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__header-img'
      >
        <img src={images.profile} alt="profile" />
        <motion.img
          whileInView={{x: [-100, 0], opacity: [0,1]}}
          transition={{duration: 1, ease: 'easeInOut'}}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.python, images.git/*, images.sass*/].map((circle, index) => ( //change these and names in images index to my skills
          <div className='circle-cmp app__flex' key={`circle-index`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')