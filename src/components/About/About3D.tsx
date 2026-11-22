import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ButterflyMovement from "./ButterflyMovement";
import type { Props } from "./ButterflyMovement";

type about3DProp = {
  device: "desktop" | "tablet" | "mobile";
  active: boolean;
  onWaypoint?: (index: number) => void;
  eventSource: HTMLDivElement | null;
};

export default function About3D({
  device,
  active,
  onWaypoint,
  eventSource,
}: about3DProp) {
  const desktopConfig = {
    startPosition: [-0.5, 0.37, -15],
    startRotation: [Math.PI / 3, 3, 0.3],
    waypoints: [
      { position: [-0.2, -0.3, 2], rotation: [0.5, 2, -0.1] },
      { position: [0.05, -0.3, 4], rotation: [0.5, 3.8, 0.2] },
      { position: [0.26, -0.12, 3], rotation: [1, 4.5, -0.1] },
    ],
    speed: 2.4,
    arriveDistance: 1.8,
  } satisfies Props;

  const movingConfig = {
    desktop: { ...desktopConfig },
    tablet: {
      ...desktopConfig,
      startPosition: [-0.49, 0.5, -15],
      waypoints: [
        ...desktopConfig.waypoints.slice(0, 2),
        { position: [0.37, -0.15, 3], rotation: [1, 4.5, -0.1] },
      ],
    },
    mobile: {
      startPosition: [-0.8, 1.6, -35],
      startRotation: [Math.PI / 3, 3, 0.3],
      waypoints: [
        { position: [-0.05, 0, 1], rotation: [0.5, 2, 0.2] },
        { position: [0, -1.4, -15], rotation: [1, 5, -0.1] },
      ],
    },
  } satisfies Record<"desktop" | "tablet" | "mobile", Props>;

  const scale = { desktop: 1.05, tablet: 0.75, mobile: 0.33 };

  return (
    <Canvas
      camera={{ position: [0, 0, 50], fov: 1 }}
      eventSource={eventSource ?? undefined}
      eventPrefix="client"
    >
      <ambientLight intensity={2.5} color="#9b9ba3" />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
      />

      <group scale={scale[device]}>
        <ButterflyMovement
          key={device}
          active={active}
          {...movingConfig[device]}
          onWaypoint={onWaypoint}
        />
      </group>
    </Canvas>
  );
}
