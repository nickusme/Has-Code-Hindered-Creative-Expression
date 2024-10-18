import { useState } from "react";

export default function CodePlayground() {
  const [bgColor, setBgColor] = useState("#3498db"); // Default color
  const [width, setWidth] = useState(200); // Default width
  const [height, setHeight] = useState(200); // Default height
  const [borderRadius, setBorderRadius] = useState(0); // Default border radius
  const [rotation, setRotation] = useState(0); // Default rotation
  const [boxText, setBoxText] = useState(""); // Default text inside the box

  return (
    <div className="code-playground">
      <div
        className="interactive-box"
        style={{
          backgroundColor: bgColor,
          width: `${width}px`,
          height: `${height}px`,
          borderRadius: `${borderRadius}px`,
          transform: `rotate(${rotation}deg)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      >
        {boxText}
      </div>

      <div className="code-editor">
        <div className="column-container">
          {/* Column 1 */}
          <div className="column">
            <label>Change Background Color:</label>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
            <label>Width:</label>
            <input
              type="range"
              min="0"
              max="400"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
            {width}px
            <label>Height:</label>
            <input
              type="range"
              min="0"
              max="400"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            {height}px
          </div>

          {/* Column 2 */}
          <div className="column">
            <label>Border Radius:</label>
            <input
              type="range"
              min="0"
              max="100"
              value={borderRadius}
              onChange={(e) => setBorderRadius(e.target.value)}
            />
            {borderRadius}px
            <label>Rotation:</label>
            <input
              type="range"
              min="0"
              max="360"
              value={rotation}
              onChange={(e) => setRotation(e.target.value)}
            />
            {rotation}°<label>Box Text:</label>
            <input
              type="text"
              value={boxText}
              onChange={(e) => setBoxText(e.target.value)}
              placeholder="Enter text inside the box"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
