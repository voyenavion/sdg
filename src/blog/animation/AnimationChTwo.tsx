import { Box, Button, Typography } from "@mui/material";
import p5 from "p5";
import React, { useEffect, useState } from "react";

const AnimationChTwo: React.FC = () => {
  const [play, setPlay] = useState(true);
  const renderRef = React.useRef<object>();
  useEffect(() => {
    if (play) {
      const p5Instance = new p5(animate, document.body);
      return () => p5Instance.remove();
    }
  }, [play]);

  const animate = (p: p5) => {
    let x = 600
    let y = 300

    p.setup = () => {
      const parentElement = renderRef.current as HTMLElement | null;
      if (parentElement) {
        p.createCanvas(window.outerWidth, 400).parent(parentElement);
      }
    };

    p.draw = () => {
    
      const d = 100
      const circle =  p.circle(x,y,d);
      circle.stroke(255, 0, 0);      
      circle.fill(255, 0, 0);
      const random = circle.noise(x)
      p.text(random.toString(), x, y).fill(0,0,100)

      const infiniteLoop = (x:number, offset:number) => {
         if(p.frameCount % 33 === 0) {
          //p.background(255)
          y = Math.random() * 400 * Math.E

         }

        if (x > p.width + offset){
          x = (-1 * offset) - 1
          
            
        
        }
        return [x + 1, y]
      }
      
 
      x = infiniteLoop(x, d/2)[0]
      y = infiniteLoop(x, d/2)[1]
    }  
    
  };


  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div
        style={{ width: window.innerWidth, height: '400px' }}
        ref={renderRef as React.RefObject<HTMLDivElement>}
      ></div>
      <span style={{ display: 'flex', justifyContent: 'center' }}>
        <Button id="play" onClick={() => setPlay(true)}>
          Play
        </Button>
        <Button id="stop" onClick={() => setPlay(false)}>
          Stop
        </Button>
      </span>
      <Box sx={{ padding: 2 }}>
        <Typography variant="body1" gutterBottom>
          It's surprising how much work can go into coding something and the
          result is totally unimpressive. I learned a lot coding my first post
          on animation and it took a while (no ai was used) but there was really
          no spark to the actual animation. For this post, I wanted to use the
          same basic skills and produce something with more impact. I added some
          creative variables like color, randomness, multiplicity, and
          mysterious numbers. That last one comes from a function on the circle
          object called "noise". I give it the x-coordinate and it does
          something...mysterious. 90's electronic music used to do the same thing with random sci-fi movie
          voice samples.
          <br />
          <br />
        </Typography>

        <Typography variant="body1" gutterBottom>
          Getting the circle to jump to a different vertical position is
          produced by resetting the y-coordinate with a random value at a
          certain interval of the
        </Typography>
        <Typography variant="body1" gutterBottom>
          <br />
          <code>
            {`
            if(p.frameCount % 33 === 0) {
              y = Math.random() * 400 * Math.E
            }
            `}
          </code>
        </Typography>
      </Box>
    </div>
  )
};

export default AnimationChTwo;
