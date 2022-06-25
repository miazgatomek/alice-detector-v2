import React, {Component} from "react";


export class Track extends Component {
    render() {
        return (
            <React.Fragment>
                <mesh>
                    <sphereBufferGeometry args={[0.07, 10, 10]}/>
                    <meshLambertMaterial attach="material" color="yellow"/>
                </mesh>
            </React.Fragment>
        )
    }
}
