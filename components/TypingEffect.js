import { useEffect, useState } from 'react';

export default function TypingEffect({ text }) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [questionMarkVisible, setQuestionMarkVisible] = useState(false); // Control visibility of question mark

  const typingText = text.slice(0, -1); // Get the text without the last character (question mark)
  const questionMark = text.slice(-1); // Get only the question mark

  useEffect(() => {
    if (index < typingText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + typingText[index]);
        setIndex(index + 1);
      }, 75); // Adjust the speed by changing the delay
      return () => clearTimeout(timeout);
    } else {
      // Show question mark after typing completes
      setQuestionMarkVisible(true);
    }
  }, [index, typingText]);

  return (
    <h2 className="typing-text">
      {displayText}
      {/* Render the question mark only after the text is done typing */}
      {questionMarkVisible && <span className="blinking-question">{questionMark}</span>}
    </h2>
  );
}