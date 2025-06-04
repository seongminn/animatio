import { useState } from 'react';
import { Fade } from './fade';

export default { title: 'Fade' };

export const Default = {
    render: () => {
        const [show, setShow] = useState(true);

        return (
            <>
                <Fade
                    show={show}
                    style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}
                >
                    Fade
                </Fade>

                <button onClick={() => setShow(!show)} style={{ marginTop: '20px' }}>
                    Toggle Fade
                </button>
            </>
        );
    },
};

export const Polymorphic = {
    render: () => {
        const [show, setShow] = useState(true);

        return (
            <>
                <Fade as="a" href="https://google.com" show={show}>
                    Fade Link
                </Fade>

                <button onClick={() => setShow(!show)} style={{ marginTop: '20px' }}>
                    Toggle Fade
                </button>
            </>
        );
    },
};
