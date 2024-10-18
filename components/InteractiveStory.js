import { useState } from "react";

function InteractiveStory() {
  const [story, setStory] = useState("start"); // Controls which part of the story the user is on

  const advanceStory = (choice) => {
    setStory(choice); // Updates the story based on user choice
  };

  return (
    <div className="story-container">
      {story === "start" && (
        <div>
          <p>You find yourself at a crossroads. Do you go left or right?</p>
          <button onClick={() => advanceStory("left")}>Go Left</button>
          <button onClick={() => advanceStory("right")}>Go Right</button>
        </div>
      )}
      {story === "left" && (
        <div>
          <p>
            Going left, you discover a hidden cave. Do you enter or keep
            walking?
          </p>
          <button onClick={() => advanceStory("enter")}>Enter the Cave</button>
          <button onClick={() => advanceStory("keepWalking")}>
            Keep Walking
          </button>
        </div>
      )}
      {story === "right" && (
        <div>
          <p>
            Turning right, you find a beautiful forest. Do you explore it or
            head back?
          </p>
          <button onClick={() => advanceStory("explore")}>
            Explore the Forest
          </button>
          <button onClick={() => advanceStory("headBack")}>Head Back</button>
        </div>
      )}
      {story === "enter" && <p>You find treasure inside the cave!</p>}
      {story === "keepWalking" && (
        <p>You continue your journey down the path...</p>
      )}
      {story === "explore" && <p>You find rare flowers in the forest!</p>}
      {story === "headBack" && <p>You return to the crossroads.</p>}
    </div>
  );
}

export default InteractiveStory;
