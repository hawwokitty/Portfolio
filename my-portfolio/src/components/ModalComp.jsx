import React from "react";
import { useState } from "react";
import { Modal, Button, List, Frame } from "@react95/core";
import { Mspaint } from "@react95/icons";

export default function ModalComp() {
    const [showModal, toggleShowModal] = useState(true);
    const handleOpenModal = () => toggleShowModal(true);
    const handleCloseModal = () => toggleShowModal(false);
    return (
      <>
        <Button onClick={handleOpenModal}>Trigger Modal</Button>
        {showModal && (
          <Modal
            width="80%"
            height="70%"
            icon={<Mspaint variant="16x16_4" />}
            title="untitled - Paint"
            defaultPosition={{
              x: 20,
              y: 20,
            }}
            onClose={handleCloseModal}
            onHelp={() => {
              console.log("Help!");
            }}
          > <Frame bg="white" boxShadow="$in" h="100%" w="100%" padding="0px 5px">
          <p>test</p>
          </Frame></Modal>
        )}
      </>
    );
}
