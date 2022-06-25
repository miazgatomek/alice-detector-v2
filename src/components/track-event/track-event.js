import React from 'react';
import event0 from '../../utils/events/event35_run226466.json';
import event1 from '../../utils/events/event41_run226466.json';
import event2 from '../../utils/events/event91_run226466.json';
import event3 from '../../utils/events/event254_run226466.json';
import event4 from '../../utils/events/event769_run122374.json';
import event5 from '../../utils/events/event786_run122374.json';
import event6 from '../../utils/events/event1153_run122374.json';
import event7 from '../../utils/events/event2162_run226466.json';
import event8 from '../../utils/events/event3055_run226466.json';
import event9 from '../../utils/events/event3205_run122374.json';
import event10 from '../../utils/events/event3490_run226466.json';
import event11 from '../../utils/events/event4047_run226466.json';
import {useFrame} from "react-three-fiber";
import {Track} from "./components/track";
import useDynamicRefs from 'use-dynamic-refs';


const EVENTS = [event0, event1, event2, event3, event4, event5, event6, event7, event8, event9, event10, event11];


const TrackEvent = (props) => {
    const [getRef, setRef] = useDynamicRefs();

    const tracksData = EVENTS[props.eventIndex - 1].fTracks;
    const tracksIds = Array.from(Array(tracksData.length).keys()).map(element => element.toString());

    let position = 0;

    useFrame(() => {
        if (position < tracksData[0].fPolyX.length) {
            tracksIds.forEach((id, i) => {
               const ref = getRef(id);
               ref.current.position.set(
                   tracksData[i].fPolyX[position] / 40,
                   tracksData[i].fPolyY[position] / 40,
                   tracksData[i].fPolyZ[position] / 40,
               );
            });

            position++;
        }
    });

    return (
        <React.Fragment>
            {tracksIds.map((id, i) => (
                <mesh ref={setRef(id)} key={i}>
                    <Track/>
                </mesh>
            ))}
        </React.Fragment>
    )
}

export default TrackEvent;
