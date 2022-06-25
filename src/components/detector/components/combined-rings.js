import {Ring} from "./ring";
import React from "react";


export const INNER_RING_COLOR = '#4DED30'
export const INNER_RING_RADIUS = 2;
export const INNER_BOX_WIDTH = 0.4;
export const INNER_BOX_HEIGHT = 1.5;
export const INNER_BOX_LENGTH = 8;

export const MIDDLE_RING_COLOR = '#949494'
export const MIDDLE_RING_RADIUS = 3.2;
export const MIDDLE_BOX_WIDTH = 0.95;
export const MIDDLE_BOX_HEIGHT = 0.55;
export const MIDDLE_BOX_LENGTH = 8;

export const OUTER_RING_COLOR = '#EE2400'
export const OUTER_RING_RADIUS = 3.6;
export const OUTER_BOX_WIDTH = 1.29;
export const OUTER_BOX_HEIGHT = 0.1;
export const OUTER_BOX_LENGTH = 8;


const CombinedRings = () => {
    return (
        <mesh>
            <Ring
                color={INNER_RING_COLOR}
                radius={INNER_RING_RADIUS}
                width={INNER_BOX_WIDTH}
                height={INNER_BOX_HEIGHT}
                length={INNER_BOX_LENGTH}
            />
            <Ring
                color={MIDDLE_RING_COLOR}
                radius={MIDDLE_RING_RADIUS}
                width={MIDDLE_BOX_WIDTH}
                height={MIDDLE_BOX_HEIGHT}
                length={MIDDLE_BOX_LENGTH}
            />
            <Ring
                color={OUTER_RING_COLOR}
                radius={OUTER_RING_RADIUS}
                width={OUTER_BOX_WIDTH}
                height={OUTER_BOX_HEIGHT}
                length={OUTER_BOX_LENGTH}
            />
        </mesh>
    );
}

export default CombinedRings;
