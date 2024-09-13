import React, { useState } from "react";
import { Modal, Frame } from "@react95/core";
import { Mspaint } from "@react95/icons";
import ArtPrompt from "./ArtPrompt";

export default function PaintComp(props) {
  const showPaint = props.show;
  const toggleShowPaint = props.toggle;
  const [showHelp, setShowHelp] = useState(false);
  const handleShowHelp = () => setShowHelp(true);

  const handleClosePaint = () => toggleShowPaint(false);
  return (
    <>
      {showPaint && (
        <Modal
          width="50%"
          height="50%"
          icon={<Mspaint variant="16x16_4" />}
          title="untitled - Paint"
          defaultPosition={{
            x: 20,
            y: 20,
          }}
          onClose={handleClosePaint}
          onHelp={handleShowHelp}
        >
          <Frame h="100%" w="100%" padding="0px 0px">
            <iframe
              src="https://jspaint.app"
              width="100%"
              height="100%"
            ></iframe>
          </Frame>
        </Modal>
      )}
      {showHelp && <ArtPrompt />}
    </>
  );
}
