import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  className?: string;
}

export function Hero3DCanvas({ className = '' }: Hero3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer | null = null;

    try {
      const scene = new THREE.Scene();

      const width = container.clientWidth || 480;
      const height = container.clientHeight || 480;
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 0, 7.5);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Neutral ambient so the objects' own color carries the contrast on a light background,
      // plus brand blue key / teal fill / deep brand rim for shading and highlights.
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0x3377f6, 3.0);
      keyLight.position.set(5, 5, 5);
      scene.add(keyLight);

      const fillLight = new THREE.PointLight(0x12a294, 2.5, 20);
      fillLight.position.set(-5, -3, 3);
      scene.add(fillLight);

      const rimLight = new THREE.DirectionalLight(0x1e5bdb, 2.0);
      rimLight.position.set(0, -6, -4);
      scene.add(rimLight);

      const mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // Inner faceted crystal — dark brand navy reads with strong contrast on a light backdrop
      const innerGeometry = new THREE.IcosahedronGeometry(1.6, 0);
      const innerMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x1a365d,
        emissive: 0x1a4aa8,
        emissiveIntensity: 0.45,
        roughness: 0.15,
        metalness: 0.85,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
      });
      const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
      mainGroup.add(innerMesh);

      // Outer wireframe lattice — darker blue so the lines stay visible against white
      const outerGeometry = new THREE.IcosahedronGeometry(2.3, 1);
      const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0x1e5bdb,
        wireframe: true,
        transparent: true,
        opacity: 0.55,
      });
      const wireframeMesh = new THREE.Mesh(outerGeometry, wireframeMaterial);
      mainGroup.add(wireframeMesh);

      // Orbital rings
      const ring1Geo = new THREE.TorusGeometry(3.0, 0.015, 16, 100);
      const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x0c8178, transparent: true, opacity: 0.6 });
      const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
      ring1.rotation.x = Math.PI / 3;
      ring1.rotation.y = Math.PI / 6;
      mainGroup.add(ring1);

      const ring2Geo = new THREE.TorusGeometry(3.4, 0.012, 16, 100);
      const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x1e5bdb, transparent: true, opacity: 0.45 });
      const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
      ring2.rotation.x = -Math.PI / 4;
      ring2.rotation.z = Math.PI / 5;
      mainGroup.add(ring2);

      // System nodes
      const nodesCount = 12;
      const nodesGroup = new THREE.Group();
      mainGroup.add(nodesGroup);
      const nodeGeo = new THREE.SphereGeometry(0.08, 16, 16);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: 0x0c8178,
        emissive: 0x0c8178,
        emissiveIntensity: 0.6,
        roughness: 0.2,
      });
      for (let i = 0; i < nodesCount; i++) {
        const mesh = new THREE.Mesh(nodeGeo, nodeMat);
        const phi = Math.acos(-1 + (2 * i) / nodesCount);
        const theta = Math.sqrt(nodesCount * Math.PI) * phi;
        const radius = 2.7 + (i % 3) * 0.4;
        mesh.position.set(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        );
        nodesGroup.add(mesh);
      }

      // Floating particles
      const particlesCount = 160;
      const particlePositions = new Float32Array(particlesCount * 3);
      for (let i = 0; i < particlesCount * 3; i += 3) {
        particlePositions[i] = (Math.random() - 0.5) * 16;
        particlePositions[i + 1] = (Math.random() - 0.5) * 16;
        particlePositions[i + 2] = (Math.random() - 0.5) * 12;
      }
      const particlesGeo = new THREE.BufferGeometry();
      particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      const particlesMat = new THREE.PointsMaterial({ color: 0x1e5bdb, size: 0.05, transparent: true, opacity: 0.7 });
      const particleField = new THREE.Points(particlesGeo, particlesMat);
      scene.add(particleField);

      // Interaction state
      let mouseX = 0;
      let mouseY = 0;
      let targetRotationX = 0;
      let targetRotationY = 0;
      let isDragging = false;
      let previousMousePosition = { x: 0, y: 0 };

      const onPointerMove = (e: PointerEvent) => {
        const rect = container.getBoundingClientRect();
        const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        if (isDragging) {
          const deltaX = e.clientX - previousMousePosition.x;
          const deltaY = e.clientY - previousMousePosition.y;
          targetRotationY += deltaX * 0.008;
          targetRotationX += deltaY * 0.008;
          previousMousePosition = { x: e.clientX, y: e.clientY };
        } else {
          mouseX = normX * 0.6;
          mouseY = normY * 0.6;
        }
      };
      const onPointerDown = (e: PointerEvent) => {
        isDragging = true;
        setIsInteracting(true);
        previousMousePosition = { x: e.clientX, y: e.clientY };
      };
      const onPointerUp = () => {
        isDragging = false;
        setTimeout(() => setIsInteracting(false), 800);
      };

      window.addEventListener('pointermove', onPointerMove);
      container.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointerup', onPointerUp);

      const handleResize = () => {
        if (!container || !renderer) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };
      window.addEventListener('resize', handleResize);

      const handleContextLost = (event: Event) => {
        event.preventDefault();
        setHasWebGL(false);
      };
      renderer.domElement.addEventListener('webglcontextlost', handleContextLost, false);

      const clock = new THREE.Clock();
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        if (!isDragging) {
          targetRotationY += 0.003;
          targetRotationX = Math.sin(elapsedTime * 0.4) * 0.15 + mouseY * 0.4;
        }

        mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.06;
        mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.06;

        innerMesh.rotation.y -= 0.005;
        innerMesh.rotation.z += 0.002;
        wireframeMesh.rotation.y += 0.004;
        ring1.rotation.z += 0.006;
        ring2.rotation.y -= 0.005;

        const scalePulse = 1 + Math.sin(elapsedTime * 2) * 0.02;
        innerMesh.scale.set(scalePulse, scalePulse, scalePulse);

        particleField.rotation.y = elapsedTime * 0.02 + mouseX * 0.1;

        renderer?.render(scene, camera);
      };
      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('pointermove', onPointerMove);
        container.removeEventListener('pointerdown', onPointerDown);
        window.removeEventListener('pointerup', onPointerUp);
        window.removeEventListener('resize', handleResize);
        if (renderer) {
          renderer.dispose();
          if (container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
        }
      };
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className={`relative flex h-full w-full items-center justify-center ${className}`}>
        <div className="p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-brand-400/30 font-mono text-xl text-brand-600 dark:text-brand-300">
            LS
          </div>
          <p className="text-sm text-slate-400 dark:text-slate-500">LAVAND SYSTEMS</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full cursor-grab select-none active:cursor-grabbing ${className}`}
    >
      <div
        className={`pointer-events-none absolute bottom-4 rounded-sm border border-slate-200 bg-white/70 px-2.5 py-1 font-mono text-[11px] text-slate-600 backdrop-blur-sm transition-opacity duration-300 dark:border-white/10 dark:bg-black/40 dark:text-slate-200 end-4 ${
          isInteracting ? 'opacity-90' : 'opacity-60'
        }`}
      >
        اسحب للتدوير
      </div>
    </div>
  );
}
