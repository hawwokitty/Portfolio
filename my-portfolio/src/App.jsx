import TaskBarComp from "./components/TaskBarComp";
import PaintComp from "./components/PaintComp";
import Desktop from "./components/Desktop";
import StreamingComp from "./components/StreamingComp";
import { useState } from "react";

function App() {
    const [showPaint, toggleShowPaint] = useState(false);
    const [showStreaming, toggleShowStreaming] = useState(false);
    const handleOpenPaint = () => toggleShowPaint(true);
    const handleOpenStreaming = () => toggleShowStreaming(true);
  return (
    <>
      <TaskBarComp />
      <Desktop openPaint={handleOpenPaint} openStreaming={handleOpenStreaming} />
      <PaintComp show={showPaint} toggle={toggleShowPaint}/>
      <StreamingComp show={showStreaming} toggle={toggleShowStreaming}/>
    </>
  );
}

export default App;
