import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Model } from "../../Scene";
import musasi from "../assets/chill.png"

const House = () => {
  return (
    <>
        <img src={musasi} alt="musasi" />
    </>
  )
}

export default House