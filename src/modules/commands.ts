import { myMoveMouse } from "./myMoveMouse";
import { getMousePos } from "robotjs";
import { drawCircle } from "./draw/drawCircle";
import { drawRectangle } from "./draw/drawRectangle";
import { drawSquare } from "./draw/drawSquare";
import { printScreen } from "./printScreen";

export const commands = {
  mouse_up(
    duplex: { write: (arg0: string) => void; },
    args: Array<string>
  ) {
    myMoveMouse('up', duplex, args);
    duplex.write('mouse_up\0')
  },

  mouse_down(duplex, args) {
    myMoveMouse('down', duplex, args);
    duplex.write('mouse_down\0')
  },

  mouse_left(duplex, args) {
    myMoveMouse('left', duplex, args);
    duplex.write('mouse_left\0')
  },

  mouse_right(duplex, args) {
    myMoveMouse('right', duplex, args);
    duplex.write('mouse_right\0')
  },

  mouse_position(duplex, args) {
    const mousePos = getMousePos();
    duplex.write(`mouse_position ${mousePos.x},${mousePos.y}\0`);
  },

  draw_circle(duplex, args) {
    drawCircle(duplex, args);
    duplex.write(`draw_circle\0`);
  },
  
  draw_rectangle(duplex, args) {
    drawRectangle(duplex, args);
    duplex.write(`draw_rectangle\0`);
  },
  
  draw_square(duplex, args) {
    drawSquare(duplex, args);
    duplex.write(`draw_square\0`);
  },

  async prnt_scrn (duplex, args) {
    const image = await printScreen(duplex, args);
    duplex.write(`prnt_scrn ${image}\0`);
  },
};
