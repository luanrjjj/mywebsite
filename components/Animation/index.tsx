import { motion, useAnimation } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import useOnScreen from '../../hooks/useOnScreen/index'

const LazyShow = ({ children }: any) => {
  const controls = useAnimation()
  const rootRef = useRef<HTMLDivElement>(null)
  const onScreen = useOnScreen(rootRef)
  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 2,
          ease: 'easeOut',
        },
      })
    }
  }, [onScreen, controls])
  return (
    <motion.div
      className="lazy-div"
      ref={rootRef}
      initial={{ opacity: 0, x: -10 }}
      animate={controls}
    >
      {children}
    </motion.div>
  )
}

export default LazyShow
