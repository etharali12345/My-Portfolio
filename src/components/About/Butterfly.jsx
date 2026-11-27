import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { useEffect, useMemo, useRef } from "react";

export function Butterfly(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/butterfly-blue-animated.glb");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions, names } = useAnimations(animations, group);
  const timer = useRef();

  const flap = (seconds = 3, speed = 1) => {
    const action = actions[names[0]];
    if (!action) return;
    clearTimeout(timer.current);
    action.reset().setEffectiveTimeScale(speed).fadeIn(0.3).play();
    timer.current = setTimeout(() => action.fadeOut(0.4), seconds * 1000);
  };

  useEffect(() => {
    flap(5.5, 1.8);
    return () => clearTimeout(timer.current);
  }, [actions, names, props.active]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={(e) => {
        e.stopPropagation();
        flap(1, 2);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "";
      }}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_6" position={[-0.06, 0, 0]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <group name="BorboletaAzul_5" />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.M_BorboletaAzul}
                    skeleton={nodes.Object_7.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/butterfly-blue-animated.glb");
