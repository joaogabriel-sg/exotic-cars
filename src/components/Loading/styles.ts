import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const Container = styled(motion.div).attrs({
  variants: containerVariants,
  initial: 'hidden',
  animate: 'visible',
})`
  background: ${({ theme }) => theme.colors.background_light}

  width: 100%;
  height: 100%;
`;
