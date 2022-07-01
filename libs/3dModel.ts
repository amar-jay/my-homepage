import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Group } from "three/src/Three";

export function loadGLTFModel(
  scene: { add: (arg0: Group) => void },
  glbPath: string,
  shadowOptions = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = shadowOptions;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "my-computer";
        obj.position.y = 1;
        obj.position.x = 1;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse((child) => {
          if (child.isObject3D) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });
        resolve(obj);
      },
      undefined,
      (error) => {
        reject(error);
      }
    );
  });
}
