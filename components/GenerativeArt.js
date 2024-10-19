import { useEffect, useRef, useState } from "react";

export default function GenerativeArt() {
  const canvasRef = useRef(null);
  const [color, setColor] = useState("#3498db");
  const [density, setDensity] = useState(100);
  const [radius, setRadius] = useState(25);

  const drawPattern = (ctx, color, density, radius) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas
    for (let i = 0; i < density; i++) {
      // Random position for each sphere
      const x = Math.random() * ctx.canvas.width;
      const y = Math.random() * ctx.canvas.height;

      // Create a radial gradient to simulate sphere shading
      const gradient = ctx.createRadialGradient(
        x - radius / 3,
        y - radius / 3,
        radius / 8, // Inner circle for the light spot
        x,
        y,
        radius // Outer circle for shading
      );

      // Simulating lighting with gradient
      gradient.addColorStop(0, "#ffffff"); // Light spot (simulates light reflection)
      gradient.addColorStop(0.3, color); // Base color
      gradient.addColorStop(1, "#000000"); // Dark shadow (simulates depth)

      // Draw the sphere with the gradient fill
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.closePath();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth - 100; // Set canvas size
    canvas.height = 500;

    // Initial drawing with default values
    drawPattern(ctx, color, density, radius);
  }, [color, density, radius]);

  return (
    <div>
      {/* Canvas for generative art */}
      <canvas ref={canvasRef}></canvas>

      {/* Controls for users */}
      <div className="controls">
        <label>
          Select Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>

        <label>
          Density:
          <input
            type="range"
            min="10"
            max="200"
            value={density}
            onChange={(e) => setDensity(e.target.value)}
          />
          {density}
        </label>

        <label>
          Radius:
          <input
            type="range"
            min="5"
            max="100"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
          />
          {radius}px
        </label>

        <button
          onClick={() => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            drawPattern(ctx, color, density, radius);
          }}
          className="generate-button"
        >
          Redraw Art
        </button>
      </div>
    </div>
  );
}
