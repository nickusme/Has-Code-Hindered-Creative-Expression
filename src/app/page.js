"use client";

import TypingEffect from "../../components/TypingEffect";
import GenerativeArt from "../../components/GenerativeArt";
import AsciiArtGenerator from "../../components/AsciiArtGenerator";
import CodePlayground from "../../components/CodePlayground";
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
            entry.target.classList.add("fade-in");
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

      <section className="fade-section landing-section">
        <p className="text-2xl">
          Many people still see coding as purely technical—just logic and rules,
          with no room for creativity. Lines of code aren&apos;t often thought
          of in the same way as brushstrokes on a canvas or verses in a
          poem—open to interpretation, emotion, or artistic expression. But that
          assumption misses a key point: coding can be a powerful form of
          creativity.
          <br />
          <br />
          In fact, as Paul Ford reflects in <em>What is Code?</em>, &quot;code
          is a system of thought,&quot; not merely a functional tool. It
          represents a new way of thinking about art, design, and even
          literature, showing how we can express ourselves through the
          interaction between human and machine. The digital age hasn&apos;t
          limited our ability to express ourselves—it has enhanced it. Coding
          has opened up entirely new ways to create, from digital art and
          AI-generated imagery to interactive storytelling and dynamic web
          experiences.
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
          <p className="text-2xl const-width">
            Art doesn&apos;t always need a paintbrush or a canvas. With
            generative design, the artist&apos;s medium is code, and the
            creative process unfolds dynamically, often producing results the
            artist didn&apos;t initially predict.
            <br />
            <br />
            In his <em>The Theory of Affordances</em>, J.J. Gibson explores how
            perception is shaped by the affordances of our environment.
            Similarly, in generative art, the affordances of the code-its{" "}
            <em>
              <span style={{ fontSize: "0.5em" }}>pseudo</span>randomness
            </em>
            , or the complex algorithms it can process—create a space where the
            artist is not the sole creator but a collaborator with the machine.
            The code&apos;s affordances shape the possibilities of the output,
            <br />
            <br />
            Try it for yourself. Use the controls below to create your own
            generative artwork. Adjust the colors, density, and radius to
            explore how small changes in code can result in entirely different
            artistic outputs.
          </p>
          <div>
            <br />
            <br />
            <div className="extraSpace"></div>
            <GenerativeArt />
          </div>
        </section>
      </div>

      {/* Section 3: ASCII Art */}
      <div className="fade-section">
        <h2>ASCII... Art?</h2>
        <section className="section scroll">
          <p className="text-2xl ascii-p">
            ASCII art is one of the earliest forms of creative expression using
            computers. In a world before modern graphics and digital drawing
            tools, artists used letters, numbers, and symbols to create
            intricate images. These artworks, often limited by the constraints
            of the medium, found creative ways to express complexity using
            simple characters.
            <br />
            <br />
            As Paul Caplan writes in <em>What is a JPEG?</em>, digital images,
            whether in JPEG format or ASCII art, are often overlooked as objects
            in and of themselves. But even these compressed forms of expression
            hold significant value as they represent a new digital layer of our
            visual world. ASCII art might seem basic, but it demonstrates how
            even the earliest digital tools were used for creative expression.
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
          <p className="text-2xl transform-p">
            Coding isn&apos;t just about solving problems or building functional
            systems—it can be playful, too. In this playground, you can
            manipulate a simple block of code that changes dynamically as you
            adjust sliders. You&apos;re not just playing with colors, sizes, and
            shapes—you&apos;re experimenting with how a small tweak in code can
            have big visual results.
            <br />
            <br />
            This kind of interaction is at the core of web design, game
            development, and other creative digital fields. Code becomes a tool
            to manipulate and create in real time, offering instant feedback for
            the creator. It&apos;s a medium where imagination and logic meet.
            <br />
            <br />
            Use the sliders and text fields below to change aspects of the
            square. The immediacy of feedback here shows how code can be a
            canvas for experimentation and expression. If you right-click on the
            square and select &quot;<b>Inspect</b>,&quot; you can see the code
            change in real time!
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
          <div className="text-block text-2xl ascii-p">
            <p>
              Storytelling has always been a central form of human expression.
              But with the rise of computing, we&apos;ve seen the development of
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
        </section>
      </div>

      {/* Section 6: Beauty in Code */}
      <div className="fade-section beauty-in-code-section">
        <h2>Beauty in Code</h2>
        <section>
          <p className="text-2xl">
            Not all code is created equal. While there are countless ways to
            solve the same problem in code, not every solution is considered
            &quot;beautiful.&quot; Beautiful code is elegant, easy to read, and
            simple to understand—even for others who didn&apos;t write it. On
            the other hand, ugly, or what we call &quot;spaghetti&quot; code, is
            tangled, complicated, and hard to follow.
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
                functions. It&apos;s efficient and clear about what it does: it
                sums up all numbers in an array. Anyone looking at it knows what
                it does at a glance.
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
                While this code works, it&apos;s longer and more repetitive. It
                uses a manual loop, which makes it harder to read and maintain
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
                root of the number, it reduces unnecessary checks. It&apos;s
                concise, with early returns to handle edge cases clearly.
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
                adds complexity where it&apos;s not needed.
              </p>
            </div>
          </div>

          {/* Explanation for Non-Coders */}
          <p className="text-2xl">
            <br />
            <br />
            Writing beautiful code isn&apos;t just about making it
            work—it&apos;s about writing it in a way that is easy to understand,
            maintain, and improve. Beautiful code is clear, logical, and
            organized, so that anyone can read it and know exactly what&apos;s
            happening. Spaghetti code, on the other hand, is messy and difficult
            to work with.
            <br />
            <br />
            In coding, just like in writing or art, there&apos;s elegance in
            simplicity. Clean, beautiful code makes life easier for future
            developers and even for your future self when you come back to it
            later. It&apos;s the difference between scribbling down a shopping
            list in a rush and writing a carefully organized to-do list that you
            can follow effortlessly.
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
          <div className="text-2xl">
            <p>
              As we&apos;ve seen throughout this site, code is much more than a
              series of instructions for computers to follow. It has opened
              doors to entirely new forms of creativity—whether it&apos;s
              designing generative art, creating interactive stories, or writing
              clean, elegant code that solves problems beautifully.
              <br />
              <br />
              Caplan&apos;s exploration of JPEGs reminds us that even in their
              compressed or minimal forms, digital objects hold artistic
              significance. ASCII art and generative designs are just the some
              of the few early ways we pushed the boundaries of creativity using
              code. The journey doesn&apos;t end here—continue exploring how
              code can transform your creative vision into reality.
              <br />
              <br />
              The beauty of code, as Paul Ford suggests in{" "}
              <em>What is Code?</em>, lies not just in its functionality but in
              how it interacts with human thought. Code is a medium that
              reflects our thought processes and creativity, a form of
              self-expression as valid as any brushstroke on canvas. And just as
              J.J. Gibson&apos;s <em>Theory of Affordances</em> shows how our
              environment shapes perception, code&apos;s inherent affordances
              shape the creative process, opening new possibilities for artistic
              expression. Some believe that because the result of code can be
              predetermined before it&apos;s executed, that it cannot be
              beautiful, subjective, or artsy. However, the beauty of code lies
              in the process of creation, the thought behind it, and the way it
              interacts with the viewer. If the code is lost, and all we have
              left is its output, we are left to ponder what brought it into
              existence, or why.
            </p>
            <div className="extraSpace"></div>
            <div className="end-symbol">
              <span>&#10024;</span>
              <span>&#129504;</span>
              <span>Code leads to endless creative possibilities</span>
              <span>&#129504;</span>
              <span>&#10024;</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
