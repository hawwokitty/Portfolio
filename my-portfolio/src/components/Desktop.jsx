import React from "react";
import { Pbrush1 } from "@react95/icons";
// import { Button } from "@react95/core";

export default function Desktop(props) {
  const handleOpenPaint = props.openPaint;
  return (
    <>
      <div className="desktop-icons">
        <div onDoubleClick={handleOpenPaint}>
          <Pbrush1 variant="32x32_4" />
          <p>Paint</p>
        </div>
      </div>
    </>
  );
}
