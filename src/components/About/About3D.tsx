import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import ButterflyMovement from "./ButterflyMovement";
import type { Props } from "./ButterflyMovement";

type aboutProp = {
  active: boolean;
  onWaypoint?: (index: number) => void;
};

export default function About3D({ active, onWaypoint }: aboutProp) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const device = isDesktop ? "desktop" : isTablet ? "tablet" : "mobile";

  const desktopConfig = {
    startPosition: [-0.47, 0.35, -15],
    startRotation: [Math.PI / 3, 3, 0.3],
    waypoints: [
      { position: [-0.05, -0.25, 5], rotation: [0.5, 2, 0.2] },
      { position: [0, -0.25, 6], rotation: [0.5, 3.8, 0.2] },
      { position: [0.25, 0.05, 3], rotation: [1, 4.5, -0.1] },
    ],
  } satisfies Props;

  const movingConfig = {
    desktop: { ...desktopConfig },
    tablet: {
      ...desktopConfig,
      waypoints: [
        ...desktopConfig.waypoints.slice(0, 2),
        { position: [0.37, 0.05, 3], rotation: [1, 4.5, -0.1] },
      ],
    },
    mobile: {
      startPosition: [-0.45, 1, -35],
      startRotation: [Math.PI / 3, 3, 0.3],
      waypoints: [
        { position: [-0.05, 0, 1], rotation: [0.5, 2, 0.2] },
        { position: [0, -0.65, -15], rotation: [1, 5, -0.1] },
      ],
    },
  } satisfies Record<"desktop" | "tablet" | "mobile", Props>;

  return (
    <Canvas camera={{ position: [0, 0, 50], fov: 1 }}>
      <ambientLight intensity={2.5} color="#9b9ba3" />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
      />

      <group scale={isDesktop ? 1.1 : isTablet ? 0.8 : 0.5}>
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
