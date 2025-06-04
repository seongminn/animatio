import type { HTMLMotionProps } from 'framer-motion';
import type { HTMLElements } from './html-elements';

export type PolymorphicProps<
    Element extends keyof HTMLElements,
    Props = {},
> = HTMLMotionProps<Element> & Props & { as?: Element };
