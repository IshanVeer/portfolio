"use client";
import React from "react";
import "@google/model-viewer";

const ModelViewer = (props: JSX.IntrinsicElements["model-viewer"]) => {
  return <model-viewer {...props}></model-viewer>;
};

export default ModelViewer;
