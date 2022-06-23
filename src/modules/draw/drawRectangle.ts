
import { dragMouse, getMousePos, mouseClick, mouseToggle } from "robotjs";
import { wait } from "../util";

export const drawRectangle = async (stream, args) => {
  const width: number = Number(args[0]);
  const length: number = Number(args[1]);
  const { x, y } = getMousePos();

  mouseClick('left');
  mouseToggle('down');
  await wait(100);
  
  dragMouse(x + width, y);
  await wait(100);
  dragMouse(x + width, y + length);
  await wait(100);
  dragMouse(x, y + length);
  await wait(100);
  dragMouse(x, y);
  await wait(100);

  mouseToggle('up');
};
