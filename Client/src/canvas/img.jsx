import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Model } from "../../Scene";
import musasi from "../assets/luffy.jpg"

const House = () => {
  return (
    <>
        <img src={musasi} alt="musasi" className="w-full h-auto"/>
    </>
  )
}

export default House