
import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    // <>
  <></>    

  )
}

useGLTF.preload('/scene-transformed.glb')
