import { GLTF } from "three-stdlib";
import { MeshStandardMaterial } from 'three';

export type GLTFRes = GLTF & {
  nodes: any;
  materials: { [materialName: string]: MeshStandardMaterial }
}

export type Position = [number, number, number];

export interface PositionInterface {
  position?: Position;
  rotation?: Position;
  scale?: Position;
}

export interface MeshInterface extends PositionInterface {
  isRotating: boolean;
  setIsRotating?: (value: boolean) => void;
  setCurrentStage?: (value: number | null) => void;
  currentFocusPoint?: any;
}
