import TaskBarComp from "./components/TaskBarComp";
import PaintComp from "./components/PaintComp";
import Desktop from "./components/Desktop";
import { useState } from "react";

function App() {
    const [showPaint, toggleShowPaint] = useState(false);
    const handleOpenPaint = () => toggleShowPaint(true);
  return (
    <>
      <TaskBarComp />
      <PaintComp show={showPaint} toggle={toggleShowPaint}/>
      <Desktop openPaint={handleOpenPaint} />
    </>
  );
}

export default App;
