import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Mesh } from "three";

export function ModelRobot(props: any) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/model-robot.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]]?.reset().play();
  }, [actions, names]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.246}
        >
          <group
            name="a45b6f53b9cc462a82863bb5898bf730fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Robot_Origin"
                  position={[0, 0.615, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Ears" position={[0, 0, 2.967]}>
                    <mesh
                      name="Ears_Black_Matt_0"
                      castShadow
                      receiveShadow
                      geometry={(nodes.Ears_Black_Matt_0 as Mesh).geometry}
                      material={materials["Black_Matt.001"]}
                    />
                  </group>
                  <group name="Empty" position={[0, -0.06, 2.786]}>
                    <group
                      name="Eyes"
                      position={[0, -0.431, 0.076]}
                      scale={[1, 1, 0]}
                    />
                  </group>
                  <group name="Hand_origin" position={[0.723, 0, 2.015]}>
                    <group name="hANDS" position={[-0.723, 0, -1.963]}>
                      <mesh
                        name="hANDS_White_Glossy_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes.hANDS_White_Glossy_0 as Mesh).geometry}
                        material={materials["White_Glossy.001"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Hand_origin002"
                    position={[-0.723, 0, 2.015]}
                    rotation={[0, 0, -Math.PI]}
                  >
                    <group name="hANDS002" position={[-0.723, 0, -1.963]}>
                      <mesh
                        name="hANDS002_White_Glossy_0"
                        castShadow
                        receiveShadow
                        geometry={
                          (nodes.hANDS002_White_Glossy_0 as Mesh).geometry
                        }
                        material={materials["White_Glossy.001"]}
                      />
                    </group>
                  </group>
                  <group name="Mouth" position={[0, -0.504, 2.573]}>
                    <mesh
                      name="Mouth_Blue_Light_0"
                      castShadow
                      receiveShadow
                      geometry={(nodes.Mouth_Blue_Light_0 as Mesh).geometry}
                      material={materials["Blue_Light.001"]}
                      position={[0, -0.005, 0.006]}
                      scale={1.225}
                    />
                  </group>
                  <group name="Robot" position={[0, 0, 0.051]}>
                    <mesh
                      name="Robot_Black_Matt_0"
                      castShadow
                      receiveShadow
                      geometry={(nodes.Robot_Black_Matt_0 as Mesh).geometry}
                      material={materials["Black_Matt.001"]}
                    />
                    <mesh
                      name="Robot_Blue_Light_0"
                      castShadow
                      receiveShadow
                      geometry={(nodes.Robot_Blue_Light_0 as Mesh).geometry}
                      material={materials["Blue_Light.001"]}
                    />
                    <mesh
                      name="Robot_White_Glossy_0"
                      castShadow
                      receiveShadow
                      geometry={(nodes.Robot_White_Glossy_0 as Mesh).geometry}
                      material={materials["White_Glossy.001"]}
                    >
                      <mesh
                        name="Plane002"
                        castShadow
                        receiveShadow
                        geometry={(nodes.Plane002 as Mesh).geometry}
                        material={materials["Name-logo"]}
                        position={[-0.054, -0.596, 1.294]}
                        rotation={[-2.957, 0, 0]}
                        scale={4.073}
                      />
                    </mesh>
                    <mesh
                      name="Robot_White_Glossy_0001"
                      castShadow
                      receiveShadow
                      geometry={
                        (nodes.Robot_White_Glossy_0001 as Mesh).geometry
                      }
                      material={materials["logo.001"]}
                      position={[0.305, -0.475, 2.809]}
                      rotation={[-0.232, 0, 0]}
                      scale={[1.187, 1, 1]}
                    />
                    <mesh
                      name="Robot_White_Glossy_0002"
                      castShadow
                      receiveShadow
                      geometry={
                        (nodes.Robot_White_Glossy_0002 as Mesh).geometry
                      }
                      material={materials.logo}
                      position={[0, -0.001, 0]}
                    />
                  </group>
                  <group name="Wave" position={[0, 0, 1]}>
                    <mesh
                      name="Wave_Blue_Light_0"
                      castShadow
                      receiveShadow
                      geometry={(nodes.Wave_Blue_Light_0 as Mesh).geometry}
                      material={materials["Blue_Light.001"]}
                    />
                  </group>
                  <group
                    name="Wave001"
                    position={[0, 0, 0.819]}
                    scale={[1, 1, 0.834]}
                  >
                    <mesh
                      name="Wave001_Blue_Light_0"
                      castShadow
                      receiveShadow
                      geometry={(nodes.Wave001_Blue_Light_0 as Mesh).geometry}
                      material={materials["Blue_Light.001"]}
                    />
                  </group>
                  <group
                    name="Wave002"
                    position={[0, 0, 0.427]}
                    scale={[1, 1, 0.474]}
                  >
                    <mesh
                      name="Wave002_Blue_Light_0"
                      castShadow
                      receiveShadow
                      geometry={(nodes.Wave002_Blue_Light_0 as Mesh).geometry}
                      material={materials["Blue_Light.001"]}
                    />
                  </group>
                  <group
                    name="Wave003"
                    position={[0, 0, 0.05]}
                    scale={[1, 1, 0.128]}
                  >
                    <mesh
                      name="Wave003_Blue_Light_0"
                      castShadow
                      receiveShadow
                      geometry={(nodes.Wave003_Blue_Light_0 as Mesh).geometry}
                      material={materials["Blue_Light.001"]}
                    />
                  </group>
                  <group
                    name="Waves"
                    position={[0, 0, 1]}
                    scale={[1, 1, 0.747]}
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

useGLTF.preload("/model/model-robot.glb");
