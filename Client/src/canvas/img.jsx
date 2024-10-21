import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
import { Model } from "../../Scene";
import musasi from "../assets/ye.jpg";

const House = () => {
  return (
    <div class="lg:h-[80vh] md:h-[60vh] sm:h-[50vh] h-[40vh] w-full flex items-center justify-center">
      <img
        src={musasi}
        alt="musasi"
        className="w-full h-auto max-h-[80vh] max-w-[70%]"
      />
    </div>
  );
};

export default House;
