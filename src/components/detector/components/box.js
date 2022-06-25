import React, {Component, createRef} from "react";


export class Box extends Component {
    constructor(props) {
        super(props);
        this.meshRef = createRef();
    }

    componentDidMount() {
        this.meshRef.current.rotation.x = this.props.rotation;
    }

    render() {
        return (
            <mesh ref={this.meshRef} position={[this.props.x, this.props.y, this.props.z]}>
                <boxBufferGeometry args={[this.props.length, this.props.width, this.props.height]}/>
                <meshLambertMaterial attach="material" color={this.props.color} transparent={true} opacity={0.7}/>
            </mesh>
        );
    }
}
