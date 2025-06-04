import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef, type ReactElement } from 'react';
import { createSplitProps } from '~/utils/create-split-props';
import type { HTMLElements } from '~/utils/html-elements';
import type { PolymorphicProps } from '~/utils/polymorphic';

// hover: boolean;
// click: boolean;
type State = { show?: boolean; defaultShow?: boolean; onShowChange?: (show: boolean) => void };
type Variants = { duration?: number; delay?: number };
export type FadeProps<Element extends keyof HTMLElements = 'div'> = PolymorphicProps<
    Element,
    State & Variants
>;

type FadeComponent = <Element extends keyof HTMLElements = 'div'>(
    props: FadeProps<Element>,
) => ReactElement | null;

export const Fade = forwardRef<HTMLDivElement, FadeProps>(
    ({ as, show, children, ...props }, ref) => {
        const Component = as || 'div';
        const MotionComponent = motion(Component);

        const [variantsProps, otherProps] = createSplitProps<Variants>()(props, [
            'delay',
            'duration',
        ]);

        const { delay = 0, duration = 1 } = variantsProps;

        return (
            <AnimatePresence>
                {show && (
                    <MotionComponent
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration, delay }}
                        {...otherProps}
                    >
                        {children}
                    </MotionComponent>
                )}
            </AnimatePresence>
        );
    },
) as FadeComponent;
