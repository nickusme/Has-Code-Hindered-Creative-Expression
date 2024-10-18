import { useState } from "react";
import figlet from "figlet";
import standard from "figlet/importable-fonts/Roman.js";

export default function AsciiArtGenerator() {
  const [inputText, setInputText] = useState("");
  const [asciiArt, setAsciiArt] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Parse the font into figlet
  figlet.parseFont("Standard", standard);

  const generateAscii = async () => {
    try {
      // Use the font name 'Standard', not the object
      figlet.text(inputText, { font: "Standard" }, (err, result) => {
        if (err) {
          console.error("Error generating ASCII art:", err);
          return;
        }
        setAsciiArt(result);
      });
    } catch (error) {
      console.error("Error generating ASCII art:", error);
    }
  };

  return (
    <div className="ascii-generator">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text to generate ASCII art"
        className="text-input"
      />
      <button onClick={generateAscii}>Generate ASCII Art</button>

      {/* Only render the frame if there is ASCII art */}
      {asciiArt && (
        <div className="ascii-frame">
          <pre>{asciiArt}</pre>
        </div>
      )}
    </div>
  );
}
