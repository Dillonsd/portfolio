import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface HeroPlanetProps {
  className?: string;
}

// Planet Component
const Planet = () => {
  const planetGroupRef = useRef<THREE.Group>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragSpeed, setDragSpeed] = useState({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      setIsDragging(true);
      lastMousePos.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setDragSpeed({ x: 0, y: 0 });
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging) {
        const deltaX = event.clientX - lastMousePos.current.x;

        setDragSpeed({
          x: deltaX * 0.001,
          y: 0,
        });

        lastMousePos.current = { x: event.clientX, y: event.clientY };
      }
    };

    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.addEventListener("mousedown", handleMouseDown);
      canvas.addEventListener("mouseup", handleMouseUp);
      canvas.addEventListener("mousemove", handleMouseMove);
      return () => {
        canvas.removeEventListener("mousedown", handleMouseDown);
        canvas.removeEventListener("mouseup", handleMouseUp);
        canvas.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isDragging]);

  useFrame(() => {
    if (planetGroupRef.current) {
      // Base rotation - slowed down
      planetGroupRef.current.rotation.y += 0.002;

      // Drag-controlled rotation speed
      planetGroupRef.current.rotation.y += dragSpeed.x;
    }
  });

  return (
    <group ref={planetGroupRef} position={[-1.5, 0, 3.5]}>
      {/* Planet Core */}
      <mesh castShadow>
        <sphereGeometry args={[1.5, 128, 128]} />
        <meshPhongMaterial
          color={0x1e1e2e}
          shininess={30}
          transparent
          opacity={1.0}
        />
      </mesh>

      {/* Planet Surface Layer */}
      <mesh>
        <sphereGeometry args={[1.52, 128, 128]} />
        <meshPhongMaterial
          color={0x2d2d3a}
          shininess={20}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Atmosphere Glow */}
      <mesh>
        <sphereGeometry args={[1.6, 128, 128]} />
        <meshPhongMaterial
          color={0x4ade80}
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Outer Atmosphere */}
      <mesh>
        <sphereGeometry args={[1.7, 128, 128]} />
        <meshPhongMaterial
          color={0x4ade80}
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Rings */}
      {[
        { color: 0x4ade80, radius: 2.2, opacity: 0.4 },
        { color: 0xa78bfa, radius: 2.5, opacity: 0.3 },
        { color: 0x3b82f6, radius: 2.8, opacity: 0.25 },
        { color: 0x10b981, radius: 3.1, opacity: 0.2 },
      ].map((ring, index) => (
        <Ring key={index} {...ring} />
      ))}

      {/* Icons */}
      <Icons />
    </group>
  );
};

// Ring Component
const Ring = ({ 
  color, 
  radius, 
  opacity = 0.3,
}: { 
  color: number; 
  radius: number; 
  opacity?: number; 
  speed?: number; 
}) => {
  const ringRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius, radius + 0.15, 128]} />
      <meshPhongMaterial
        color={color}
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
        shininess={50}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

// Icon data moved outside component
const iconData = [
  {
    name: "React",
    icons: "react.svg",
    radius: 2.4,
    speed: -0.000025,
    offset: Math.PI / 6,
  },
  {
    name: "Expo",
    icons: "expo.svg",
    radius: 2.6,
    speed: -0.00002,
    offset: Math.PI / 3,
  },
  {
    name: "Tailwind",
    icons: "tailwind.svg",
    radius: 2.8,
    speed: -0.000018,
    offset: Math.PI / 2,
  },
  {
    name: "Supabase",
    icons: "supabase.svg",
    radius: 3.0,
    speed: -0.000015,
    offset: (Math.PI * 2) / 3,
  },
  {
    name: "Stripe",
    icons: "stripe.svg",
    radius: 3.2,
    speed: -0.000012,
    offset: Math.PI,
  },
  {
    name: "Nginx",
    icons: "nginx.svg",
    radius: 2.3,
    speed: -0.000028,
    offset: (Math.PI * 4) / 3,
  },
  {
    name: "Cloudflare",
    icons: "cloudflare.svg",
    radius: 2.5,
    speed: -0.000022,
    offset: (Math.PI * 3) / 2,
  },
  {
    name: "MongoDB",
    icons: "mongo.svg",
    radius: 2.7,
    speed: -0.000018,
    offset: (Math.PI * 5) / 3,
  },
  {
    name: ".NET",
    icons: "dotnet.svg",
    radius: 2.9,
    speed: -0.000014,
    offset: Math.PI * 2,
  },
  {
    name: "C#",
    icons: "csharp.svg",
    radius: 3.1,
    speed: -0.000011,
    offset: (Math.PI * 7) / 3,
  },
  {
    name: "TypeScript",
    icons: "typescript.svg",
    radius: 2.4,
    speed: -0.000026,
    offset: (Math.PI * 8) / 3,
  },
  {
    name: "Node.js",
    icons: "nodejs.svg",
    radius: 2.6,
    speed: -0.000021,
    offset: Math.PI * 3,
  },
  {
    name: "Python",
    icons: "python.svg",
    radius: 2.8,
    speed: -0.000017,
    offset: (Math.PI * 10) / 3,
  },
  {
    name: "Git",
    icons: "git.svg",
    radius: 3.0,
    speed: -0.000013,
    offset: (Math.PI * 11) / 3,
  },
  {
    name: "Docker",
    icons: "docker.svg",
    radius: 3.2,
    speed: -0.00001,
    offset: Math.PI * 4,
  },
  {
    name: "C",
    icons: "c.svg",
    radius: 2.3,
    speed: -0.000027,
    offset: (Math.PI * 13) / 3,
  },
  {
    name: "C++",
    icons: "cplusplus.svg",
    radius: 2.5,
    speed: -0.000023,
    offset: (Math.PI * 14) / 3,
  },
];

// Texture loader function
const loadTexture = (iconName: string) => {
  const textureLoader = new THREE.TextureLoader();
  try {
    return textureLoader.load(`/hero_icons/${iconName}`);
  } catch (error) {
    console.warn(`Failed to load texture for ${iconName}:`, error);
    return null;
  }
};

// Icons Component
const Icons = () => {
  const iconsRef = useRef<THREE.Group>(null);

  // Preload all textures
  const textures = useMemo(() => {
    const textureMap = new Map();
    iconData.forEach((icon) => {
      if (icon.icons) {
        const texture = loadTexture(icon.icons);
        if (texture) {
          textureMap.set(icon.name, texture);
        }
      }
    });
    return textureMap;
  }, []);

  useFrame(() => {
    if (iconsRef.current) {
      iconsRef.current.children.forEach((icon, index) => {
        const data = iconData[index];
        if (data) {
          // Update angle
          const mesh = icon as THREE.Mesh & { orbitAngle?: number };
          mesh.orbitAngle = mesh.orbitAngle || data.offset;
          mesh.orbitAngle += data.speed;

          // Update position
          icon.position.x = Math.cos(mesh.orbitAngle) * data.radius;
          icon.position.z = Math.sin(mesh.orbitAngle) * data.radius;
          icon.position.y = 0.1 + Math.sin(mesh.orbitAngle * 2) * 0.05;

          // Add gentle rotations based on index
          const time = Date.now() * 0.001;
          const rotationSpeed = 0.2 + index * 0.1;

          // Rotate around different axes based on index
          if (index % 3 === 0) {
            icon.rotation.x += rotationSpeed * 0.003;
          } else if (index % 3 === 1) {
            icon.rotation.y += rotationSpeed * 0.003;
          } else {
            icon.rotation.z += rotationSpeed * 0.003;
          }

          // Add wobble effect
          const wobble = Math.sin(time * 1.5 + index) * 0.005;
          icon.rotation.x += wobble;
        }
      });
    }
  });

  return (
    <group ref={iconsRef}>
      {iconData.map((icon, index) => {
        // Add size variations based on index
        const sizeVariation = 0.9 + index * 0.02;
        const width = 0.1 * sizeVariation;
        const height = 0.1 * sizeVariation;
        const depth = 0.1 * sizeVariation;

        const texture = textures.get(icon.name);

                  return (
            <group key={index}>
              {/* Background cube - slightly smaller */}
              <mesh>
                <boxGeometry args={[width * 0.9, height * 0.9, depth * 0.9]} />
                <meshPhongMaterial
                  color={0x1e1e2e}
                  emissiveIntensity={0.2}
                  transparent={true}
                  opacity={0.9}
                  shininess={50}
                />
              </mesh>
              {/* Foreground cube with texture */}
              <mesh>
                <boxGeometry args={[width, height, depth]} />
                <meshPhongMaterial
                  color={0x61dafb}
                  emissiveIntensity={0.5}
                  map={texture || undefined}
                  transparent={true}
                  opacity={texture ? 1 : 0.8}
                  shininess={50}
                />
              </mesh>
            </group>
          );
      })}
    </group>
  );
};

// Main Component
const HeroPlanet: React.FC<HeroPlanetProps> = ({ className = "" }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [-5.5, 0.75, 2.5], fov: 60 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        shadows
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[0, 12, 5]} intensity={8} castShadow />
        <pointLight position={[-5, 0, 5]} color={0x4ade80} intensity={2} distance={100} />
        <pointLight position={[5, 0, -5]} color={0xa78bfa} intensity={1.5} distance={100} />
        <spotLight 
          position={[0, 10, 0]} 
          angle={0.3} 
          penumbra={1} 
          intensity={3} 
          castShadow 
          color={0xffffff}
        />

        {/* Scene Objects */}
        <Planet />
      </Canvas>
    </div>
  );
};

export default HeroPlanet;
