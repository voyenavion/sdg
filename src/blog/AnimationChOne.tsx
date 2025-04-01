import { Box, Button, Typography } from "@mui/material";
import p5 from "p5";
import React, { useEffect, useState } from "react";

const AnimationChOne: React.FC = () => {
  const [play, setPlay] = useState(true);
  const renderRef = React.useRef<object>();
  useEffect(() => {
    if (play) {
      const p5Instance = new p5(animate, document.body);
      return () => p5Instance.remove();
    }
  }, [play]);

  const animate = (p: p5) => {
    let x = 0;

    p.setup = () => {
      const parentElement = renderRef.current as HTMLElement | null;
      if (parentElement) {
        p.createCanvas(window.outerWidth, 400).parent(parentElement);
      }
    };

    p.draw = () => {
      p.background(255);

      const d = 100;
      const circle = p.circle(x, 100, d);

      circle.stroke(255, 0, 0);
      circle.fill(255, 0, 0);

      const infiniteLoop = (x: number, offset: number) => {
        if (x > p.width + offset) {
          x = -1 * offset - 1;
        }
        return x + 1;
      };

      x = infiniteLoop(x, d / 2);
    };
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{ width: window.innerWidth, height: "400px" }}
        ref={renderRef as React.RefObject<HTMLDivElement>}
      ></div>
      <span style={{ display: "flex", justifyContent: "center" }}>
        <Button id="play" onClick={() => setPlay(true)}>
          Play
        </Button>
        <Button id="stop" onClick={() => setPlay(false)}>
          Stop
        </Button>
      </span>
      <Box sx={{ padding: 2 }}>
        <Typography variant="body1" gutterBottom>
          The first thing I learned about with in-browser animation was the
          canvas element. It is a special HTML native element in which
          animations can run.
        </Typography>
        <Typography variant="body1" gutterBottom>
          The next thing I learned about was the P5 library. It's the leading JS
          animation library, and it's an offshoot of a Java animation library
          called Process. It has a lot of users, a great sandbox, and it's easy
          to find examples.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Getting up and running with P5 is not too hard but some of the finer
          points of how to make it work in the context of a web page or react
          app take a little bit of digging.
        </Typography>
        <Typography variant="body1" gutterBottom>
          For instance, it's easy enough to create the canvas element but how do
          you get it to appear in a chosen spot of the page? And what about
          making it stop gracefully? For the first question, I found you can
          give it a parent element to create the animation in. For the second
          question, I found that you can call the <code>remove</code> method on
          the p5 instance.
        </Typography>
        <Typography variant="body1" gutterBottom>
          To make it work nicely in React, I used a simple state variable{" "}
          <code>play</code> and a <code>useEffect</code> hook to create the p5
          instance and remove it when the component unmounts. The removal as a
          cleanup function returned by the <code>useEffect</code> hook was all
          Copilot's idea, which I'm quite impressed by.
        </Typography>
        <Typography variant="body1" gutterBottom>
          After that, the most interesting problem I encountered was very
          animation-specific. How do you make an object move in a loop so that
          when it goes off-screen on the right it reappears on the left? I found
          that the best way to do this is to check if the object has moved off
          the screen and, if so, reset its position.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Originally, I found a lot of solutions that looked something like
          this: <code>x = frameCount % width</code>, but I found one big problem
          with that. If you are using a circle or any other shape bigger than
          one pixel, when the center of the object hits the edge of the screen,
          it jumps to the other side and it is not smooth. Intuitively, you
          would expect the whole of the circle to disappear off the edge of the
          screen and then reappear on the other side.
        </Typography>
        <Typography variant="body1" gutterBottom>
          To get that behavior, the code has to account for the width of the
          object and add half of it to the width of the window. Likewise, when
          it is on the other side of the screen, you have to subtract half the
          width from 0. This allows the left edge of the object to be seen at
          the left edge of the screen and the right edge of the object to be
          seen at the right edge of the screen.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Adding and subtracting offsets like that just doesn't work with the
          modulus operator solution. It's better to just say simply when you get
          to this point on the right side of the screen, reset to this point on
          the left side of the screen.
        </Typography>
        <Typography variant="body1" gutterBottom>
          So the code looks like this:
        </Typography>
        <Typography variant="body1" gutterBottom>
          <code>
            const infiniteLoop = (x: number, offset: number) =&gt; &#123; if (x
            &gt; p.width + offset) &#123; x = (-1 * offset) - 1; &#125; return x
            + 1; &#125;;
          </code>
        </Typography>
      </Box>
    </div>
  );
};

export default AnimationChOne;
