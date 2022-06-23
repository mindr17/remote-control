import { myMoveMouse } from "./myMoveMouse";
import { getMousePos } from "robotjs";
import { drawCircle } from "./draw/drawCircle";

export const commands = {
  mouse_up(stream, args: Array<string>) {
    myMoveMouse('up', stream, args);
  },

  mouse_down(stream, args) {
    myMoveMouse('down', stream, args);
  },

  mouse_left(stream, args) {
    myMoveMouse('left', stream, args);
  },

  mouse_right(stream, args) {
    myMoveMouse('right', stream, args);
  },

  mouse_position(stream, args) {

  },

  draw_circle(stream, args) {
    drawCircle(stream, args);
  },

  draw_rectangle(stream, args) {

  },

  draw_square(stream, args) {

  },

  prnt_scrn(stream, args) {

  },
};
