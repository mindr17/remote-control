import { dragMouse, getMousePos, mouseToggle } from "robotjs";


export const drawCircle = (stream, args) => {
  const radius: number = Number(args[0]);
  const mousePos = getMousePos();

  
  for (let i = 0; i <= (Math.PI * 2) + 1; i += 0.1) {
    const x: number = mousePos.x + (radius * Math.cos(i));
    const y: number = mousePos.y + (radius * Math.sin(i));
    
    dragMouse(x, y);

    if (i === 0) {
      mouseToggle("down");
    }
  }

  mouseToggle("up");
};
