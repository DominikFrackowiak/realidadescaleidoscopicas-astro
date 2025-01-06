import { motion, useScroll } from 'framer-motion';

export default function PageScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="progress-bar"
      style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: 1000,
        height: 3,
        transformOrigin: '0%',
        background: '#364ec6',
        width: '100%',
      }}
    />
  );
}
