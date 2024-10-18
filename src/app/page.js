"use client";

import TypingEffect from "../../components/TypingEffect";
import GenerativeArt from "../../components/GenerativeArt";
import AsciiArtGenerator from "../../components/AsciiArtGenerator";
import CodePlayground from "../../components/CodePlayground";
import InteractiveStory from "../../components/InteractiveStory";
import { useState, useEffect } from "react";

import Image from "next/image";

import photopiaPoster from "./images/Photopia.png";
import anchorheadPoster from "./images/Anchorhead.png";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [backgroundStyle, setBackgroundStyle] = useState({});

  useEffect(() => {
    // Intersection observer for fade-in effect
    const sections = document.querySelectorAll(".fade-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in"); // Apply fade-in class when in view
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxHeight = document.body.scrollHeight - window.innerHeight;

      const scrollPercentage = scrollPosition / maxHeight;

      setBackgroundStyle({
        background: `linear-gradient(
                    to bottom, 
                    #f5f5f5 0%, 
                    #f5f5f5 ${100 - scrollPercentage * 100}%, 
                    #FF7F50 ${scrollPercentage * 100}%,
                    #FF4500 ${scrollPercentage * 130}%,
                    #9400D3 ${scrollPercentage * 160}%,
                    #4B0082 ${scrollPercentage * 190}%
                )`,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Landing Page Section */}
      <section
        className="flex justify-center items-center section"
        style={{ textAlign: "center" }}
      >
        {isVisible && (
          <TypingEffect
            text="Has code hindered creative expression?"
            className="typing-text"
          />
        )}
      </section>

      {/* Section 1 */}
      <section className="fade-section landing-section">
        <p className="text-3xl">
          Many people still see coding as purely technical—just logic and rules,
          with no room for creativity. Lines of code arent often thought of in
          the same way as brushstrokes on a canvas or verses in a poem—open to
          interpretation, emotion, or artistic expression. But that assumption
          misses a key point: coding can be a powerful form of creativity.
          <br />
          <br />
          In fact, the digital age hasnt limited our ability to express
          ourselves—its enhanced it. Coding has opened up entirely new ways to
          create, from digital art and AI-generated imagery to interactive
          storytelling and dynamic web experiences. Far from hindering creative
          expression, computing has helped us push the boundaries of what art
          and creativity can look like.
          <br />
          <br />
          This site will guide you through some of the many ways code has
          transformed how we express ourselves, challenging the idea that coding
          is only technical and showing just how innovative and artistic it can
          truly be.
        </p>
      </section>

      {/* Section 2: Generative Art */}
      <div className="fade-section">
        <h2>Generative Art</h2>
        <section className="flex section">
          <p className="text-3xl const-width">
            Art doesnt always need a paintbrush or a canvas. With generative
            design, the artists medium is code, and the creative process unfolds
            dynamically, often producing results the artist didnt initially
            predict.
            <br />
            <br />
            Generative art uses algorithms, randomness, and creative code to
            create visual expressions. Its a powerful intersection where art
            meets computing, and the artist becomes more like a collaborator
            with the machine. The algorithm itself may be simple, but its output
            can be complex, vibrant, and truly unique.
            <br />
            <br />
            Try it for yourself. Use the controls below to create your own
            generative artwork. Adjust the colors, density, and radius to
            explore how small changes in code can result in entirely different
            artistic outputs.
          </p>
          <div>
            <div className="extraSpace"></div>
            <GenerativeArt />
          </div>
        </section>
      </div>

      {/* Section 3: ASCII Art Generator */}
      <div className="fade-section">
        <h2>ASCII... Art?</h2>
        <section className="section">
          <p className="text-3xl ascii-p">
            ASCII art is one of the earliest forms of creative expression using
            computers. In a world before modern graphics and digital drawing
            tools, artists used letters, numbers, and symbols to create
            intricate images. These artworks, often limited by the constraints
            of the medium, found creative ways to express complexity using
            simple characters.
            <br />
            <br />
            This section invites you to create your own ASCII art—transforming
            text into visual art. Though ASCII art might seem basic, it’s an
            example of how even the earliest digital tools could be used for
            creative expression.
            <br />
            <br />
            Type something into the box below and watch it turn into art. This
            shows that code itself can turn something as mundane as text into
            something artistic.
          </p>
          <div>
            <AsciiArtGenerator />
          </div>
        </section>
      </div>

      {/* Section 4: Code Playground */}
      <div className="fade-section">
        <h2>Code creates and transforms</h2>
        <section className="flex section">
          <p className="text-3xl transform-p">
            Coding isn’t just about solving problems or building functional
            systems—it can be playful, too. In this playground, you can
            manipulate a simple block of code that changes dynamically as you
            adjust sliders. You’re not just playing with colors, sizes, and
            shapes—you’re experimenting with how a small tweak in code can have
            big visual results.
            <br />
            <br />
            This kind of interaction is at the core of web design, game
            development, and other creative digital fields. Code becomes a tool
            to manipulate and create in real time, offering instant feedback for
            the creator. It’s a medium where imagination and logic meet.
            <br />
            <br />
            Use the sliders and text fields below to change aspects of the
            square. The immediacy of feedback here shows how code can be a
            canvas for experimentation and expression. If you right-click on the
            square and select "<b>Inspect</b>," you can see the code change in
            real time!
          </p>
          <div>
            <div className="extraSpace"></div>
            <CodePlayground />
          </div>
        </section>
      </div>

      {/* Section 5: Digital Storytelling */}
      <div className="fade-section story-block">
        <h2>Digital Storytelling</h2>
        <section className="h-screen section">
          <div className="text-block text-3xl ascii-p">
            <p>
              Storytelling has always been a central form of human expression.
              But with the rise of computing, we've seen the development of
              entirely new ways to tell stories—ones that go beyond traditional
              linear narratives. Interactive literature,
              choose-your-own-adventure stories, and text-based games have
              pushed the boundaries of storytelling, giving the reader agency in
              the direction of the plot.
              <br />
              <br />
            </p>
            <p className="center">
              <b>
                Click on the posters below to play two great text-based CYOA
                games!
              </b>
              <br />
              <br />
            </p>
          </div>

          {/* Poster section */}
          <div className="poster-container">
            <a
              href="http://adamcadre.ac/if/photopia.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={photopiaPoster}
                alt="Photopia Poster"
                className="story-poster"
              />
            </a>
            <a
              href="https://www.ifiction.org/games/playz.php?cat=&game=231&mode=html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={anchorheadPoster}
                alt="Anchorhead Poster"
                className="second-story-poster"
              />
            </a>
          </div>

          {/* Clickable game component below posters */}
          <div className="game-container">
            <InteractiveStory />
          </div>
        </section>
      </div>

      {/* Section 6: Beauty in Code */}
      <div className="fade-section beauty-in-code-section">
        <h2>Beauty in Code</h2>
        <section className="beauty-in-code-content">
          <p className="text-3xl">
            Not all code is created equal. While there are countless ways to
            solve the same problem in code, not every solution is considered
            "beautiful." Beautiful code is elegant, easy to read, and simple to
            understand—even for others who didn't write it. On the other hand,
            ugly, or what we call "spaghetti" code, is tangled, complicated, and
            hard to follow.
            <br />
            <br />
          </p>

          {/* Scrollable Code Comparison Section */}
          <div className="code-comparison-container">
            {/* Beautiful Code Example 1 */}
            <div className="code-block beautiful-code">
              <h3 className="text-2xl text-green-600">Beautiful Code</h3>
              <pre className="code-snippet">
                {`function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}`}
              </pre>
              <p className="text-xl explanation">
                This example is concise, easy to read, and leverages built-in
                functions. It’s efficient and clear about what it does: it sums
                up all numbers in an array. Anyone looking at it knows what it
                does at a glance.
              </p>
            </div>

            {/* Ugly Code Example 1 */}
            <div className="code-block ugly-code">
              <h3 className="text-2xl text-red-600">Ugly Code</h3>
              <pre className="code-snippet">
                {`function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}`}
              </pre>
              <p className="text-xl explanation">
                While this code works, it’s longer and more repetitive. It uses
                a manual loop, which makes it harder to read and maintain
                compared to the elegant one-liner above. It gets the job done,
                but it could be cleaner.
              </p>
            </div>

            {/* Beautiful Code Example 2 */}
            <div className="code-block beautiful-code">
              <h3 className="text-2xl text-green-600">Beautiful Code</h3>
              <pre className="code-snippet">
                {`function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}`}
              </pre>
              <p className="text-xl explanation">
                This code is efficient and clean. By checking up to the square
                root of the number, it reduces unnecessary checks. It's concise,
                with early returns to handle edge cases clearly.
              </p>
            </div>

            {/* Ugly Code Example 2 */}
            <div className="code-block ugly-code">
              <h3 className="text-2xl text-red-600">Ugly Code</h3>
              <pre className="code-snippet">
                {`function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}`}
              </pre>
              <p className="text-xl explanation">
                This code works but is inefficient. It loops through the entire
                number range unnecessarily, and the use of a flag (`isPrime`)
                adds complexity where it's not needed.
              </p>
            </div>
          </div>

          {/* Explanation for Non-Coders */}
          <p className="text-3xl">
            <br />
            <br />
            Writing beautiful code isn’t just about making it work—it’s about
            writing it in a way that is easy to understand, maintain, and
            improve. Beautiful code is clear, logical, and organized, so that
            anyone can read it and know exactly what’s happening. Spaghetti
            code, on the other hand, is messy and difficult to work with.
            <br />
            <br />
            In coding, just like in writing or art, there’s elegance in
            simplicity. Clean, beautiful code makes life easier for future
            developers and even for your future self when you come back to it
            later. It’s the difference between scribbling down a shopping list
            in a rush and writing a carefully organized to-do list that you can
            follow effortlessly.
          </p>
        </section>
      </div>

      {/* Section 7: Conclusion */}
      <div className="extraSpace"></div>
      <div className="extraSpace"></div>
      <div className="extraSpace"></div>
      <div className="fade-section conclusion-section">
        <h2>Conclusion: Code as a Creative Medium</h2>
        <section className="flex justify-center section">
          <div className="text-3xl">
            <p>
              As we've seen throughout this site, code is much more than a
              series of instructions for computers to follow. It has opened
              doors to entirely new forms of creativity—whether it’s designing
              generative art, creating interactive stories, or writing clean,
              elegant code that solves problems beautifully.
              <br />
              <br />
              The beauty of code is multifaceted. It lies not just in its
              functionality, but in how it communicates with others. Code can be
              poetry—concise, elegant, and meaningful. Writing beautiful code
              isn’t just a technical skill, it's a form of self-expression. The
              ability to write code that is clean, concise, and understandable
              by others mirrors the principles we see in art, design, and even
              literature.
              <br />
              <br />
              Beauty, of course, is subjective. In the same way a brushstroke or
              a verse might mean different things to different people, code too
              can be interpreted in many ways. What matters is that coding as a
              medium offers us endless possibilities for self-expression,
              creativity, and innovation.
              <br />
              <br />
              Whether you’re building a website, crafting a game, or creating
              art from lines of code, remember that your code reflects your
              creative choices. By embracing the artistry within coding, we can
              continue to push the boundaries of what we create, building a
              future where technology and creativity work hand-in-hand.
              <br />
              <br />
              As you’ve explored on this site, from generative art to digital
              storytelling, we now live in a world where coding is a vital
              medium of creative expression. The journey doesn’t end here—take
              what you’ve learned and continue exploring how code can transform
              your creative vision into reality.
            </p>

            {/* Optional: Add a cool UI element to signify the end */}
            <div className="end-symbol">
              <span>&#10024;</span>
              <span>Code + Creativity = Endless Possibilities</span>
              <span>&#10024;</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
