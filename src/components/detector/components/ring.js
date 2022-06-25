import React, {Component} from "react";
import {Box} from "./box";


export class Ring extends Component {
    constructor(props) {
        super();

        const degreesToRadians = (degrees) => (Math.PI / 180) * degrees;
        const getY = (i) => Math.sin(degreesToRadians(i * 20)) * props.radius;
        const getZ = (i) => Math.cos(degreesToRadians(i * 20)) * props.radius;

        this.boxProps = Array.from(Array(19), (_, i) => ({
            x: 0,
            y: getY(i),
            z: getZ(i),
            rotation: degreesToRadians(360 - i * 20)
        }));
    }

    render() {
        return (
            <React.Fragment>
                <mesh>
                    {this.boxProps.map((prop, i) =>
                        <Box
                            {...prop}
                            key={i}
                            color={this.props.color}
                            width={this.props.width}
                            height={this.props.height}
                            length={this.props.length}
                        />)
                    }
                </mesh>
            </React.Fragment>
        )
    }
}
