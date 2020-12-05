import React, { useEffect, useRef } from 'react';
import { webEffectAnimation } from '../../lib/web-effect';

const WebEffect = (props) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        webEffectAnimation(canvasRef.current)();
    }, [canvasRef]);

    return <canvas
        ref={canvasRef}
        className={props.class}
        width="600"
        height="600">
    </canvas>
}

export default WebEffect
