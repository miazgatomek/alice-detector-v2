import {useLoader} from "react-three-fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import React from 'react';

export function CustomModel() {
    const gltf = useLoader(GLTFLoader, './../../utils/models/yellow-plaster/yellow_plaster_4k.gltf')
    return (
        <React.Suspense fallback={null}>
            <primitive object={gltf.scene} />
        </React.Suspense>
    )
}
