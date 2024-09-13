import React, { useState, useEffect } from "react";
import { Modal, Fieldset } from "@react95/core";
import { HelpBook } from "@react95/icons";

const ArtPrompt = () => {
  const [palette, setPalette] = useState([]);

  const [showModal, toggleShowModal] = useState(true);
  //   const handleOpenModal = () => toggleShowModal(true);
  const handleCloseModal = () => toggleShowModal(false);

  // Fetch color palette from the Express backend
  useEffect(() => {
    const fetchPalette = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/palette"); // Fetch from the backend server

        const data = await response.json();

        // Check if the data contains the result array
        if (data.result) {
          setPalette(data.result); // Set the palette with the RGB values array
        }
      } catch (error) {
        console.error("Error fetching color palette:", error);
      }
    };

    fetchPalette();
  }, []);

  return (
    <>
      {showModal && (
        <Modal
          //   width="300px"
          //   height="200px"
          icon={<HelpBook variant="16x16_4" />}
          title="What should I draw?"
          defaultPosition={{
            x: 0,
            y: 20,
          }}
          onClose={handleCloseModal}
          onHelp={() => {
            console.log("Help!");
          }}
          buttons={[
            {
              value: "Ok",
              onClick: handleCloseModal,
            },
            {
              value: "Generate again",
              onClick: handleCloseModal,
            },
          ]}
        >
          <p>
            If you need ideas for what to draw, feel free to use the generated
            color palette:
          </p>
          <Fieldset legend="Generated Color Palette">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {palette.map((color, index) => (
                <div style={{ display: "flex" }}>
                  <div
                    key={index}
                    style={{
                      backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`, // Use the RGB values for the color
                      width: "20px",
                      height: "20px",
                      margin: "5px",
                      border: "1px solid #000",
                    }}
                  ></div>
                  <p>{`RGB(${color[0]}, ${color[1]}, ${color[2]})`}</p>
                </div>
              ))}
            </div>
          </Fieldset>
        <h4>How to use palette</h4>
            <ul>
                <li>Click "Colors</li>
                <li>Click "Edit colors...</li>
                <li>Click "Edit colors...</li>
                <li>Click "Define Custom Colors</li>
                <li>Click an empty custom color</li>
                <li>Enter the RGB values for each color</li>
            </ul>
         
        </Modal>
      )}
    </>
  );
};

export default ArtPrompt;
