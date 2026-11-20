import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Butterfly } from "./Butterfly";

export type Vec3 = [number, number, number];

export type Waypoint = {
  position: Vec3;
  rotation: Vec3;
};

export type Props = {
  active?: boolean;
  mode?: "screen" | "world";
  startPosition?: Vec3;
  startRotation?: Vec3;
  waypoints?: Waypoint[];
  speed?: number;
  delay?: number;
  arriveDistance?: number;
  onWaypoint?: (index: number) => void;
};

export default function ButterflyMovement({
  active = false,
  mode = "screen",
  startPosition = [-0.47, 0.35, -15],
  startRotation = [Math.PI / 3, 3, 0.3],
  waypoints = [
    { position: [-0.05, -0.25, 5], rotation: [0.5, 2, 0.2] },
    { position: [0, -0.25, 6], rotation: [0.5, 3.8, 0.2] },
    { position: [0.25, 0.05, 3], rotation: [1, 4.5, -0.1] },
  ],
  speed = 2,
  delay = 0.3,
  arriveDistance = 1.4,
  onWaypoint,
}: Props) {
  const groupRef = useRef<THREE.Group>(null);
  const started = useRef(false);
  const elapsed = useRef(0);
  const index = useRef(0);
  const targetPos = useRef(new THREE.Vector3());
  const { viewport } = useThree();
  const lightRef = useRef<THREE.SpotLight>(null);
  const finished = useRef(false);

  const toWorld = (p: Vec3, out: THREE.Vector3) =>
    mode === "screen"
      ? out.set(p[0] * viewport.width, p[1] * viewport.height, p[2])
      : out.set(p[0], p[1], p[2]);

  useFrame((_, delta) => {
    const g = groupRef.current;

    if (!g || waypoints.length === 0) return;

    if (!started.current) {
      toWorld(startPosition, g.position);
      g.rotation.set(...startRotation);
      started.current = true;
      return;
    }

    if (!active) return;

    elapsed.current += delta;
    if (elapsed.current < delay) return;

    const wp = waypoints[index.current];
    toWorld(wp.position, targetPos.current);

    const t = 1 - Math.exp(-speed * delta);
    g.position.lerp(targetPos.current, t);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, wp.rotation[0], t);
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, wp.rotation[1], t);
    g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, wp.rotation[2], t);

    const isLast = index.current === waypoints.length - 1;

    const dist = g.position.distanceTo(targetPos.current);

    if (!isLast && dist < arriveDistance) {
      index.current += 1;
      onWaypoint?.(index.current);
    } else if (isLast && !finished.current && dist < arriveDistance) {
      finished.current = true;
      onWaypoint?.(index.current);
    }

    const light = lightRef.current;
    if (light) {
      const arrived = isLast && dist < arriveDistance;
      if (arrived) {
        light.target.position.copy(targetPos.current);
        light.target.updateMatrixWorld();
      }
    }
  });

  return (
    <>
      <spotLight
        ref={lightRef}
        color={"rgb(203, 126, 248)"}
        position={[1.5, 0, 10]}
        intensity={50}
        angle={0.03}
        penumbra={0.13}
      />
      <group ref={groupRef}>
        <Butterfly />
      </group>
    </>
  );
}
