import React, { useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Stage,
  useGLTF
} from "@react-three/drei";

const FairyTaleCreator: React.FC = () => {
  return (
    <div
      style={{
        height: "100vw",
        width: "100vw",
        overflow: "hidden"
      }}
    >
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 5000]} />{" "}
        {/* 카메라 위치 조정 */}
        <Stage>
          <Model url="/scene.gltf" />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

const Model: React.FC<{ url: string }> = ({ url }) => {
  const { scene } = useGLTF(url);
  const { scene: mainScene } = useThree(); // 현재 씬 가져오기

  useEffect(() => {
    mainScene.add(scene); // 현재 씬에 GLTF 씬 추가

    return () => {
      mainScene.remove(scene); // 컴포넌트 언마운트 시 제거
    };
  }, [scene, mainScene]);

  useFrame(() => {
    scene.rotation.y += 0.01; // y축을 중심으로 회전 속도 조절
  });

  return null; // 실제 렌더링은 필요 없음
};

export default FairyTaleCreator;
