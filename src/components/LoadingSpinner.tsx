import { motion } from 'framer-motion'
import { memo } from 'react'

const LoadingSpinner = memo(() => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="w-12 h-12 border-4 border-gray-900 dark:border-white rounded-full border-t-transparent"
      />
    </div>
  )
})

LoadingSpinner.displayName = 'LoadingSpinner'

export default LoadingSpinner