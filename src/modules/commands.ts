import { myMoveMouse } from "./myMoveMouse";


export const commands = {
  mouse_up(args: Array<string>) {
    myMoveMouse('up', args);
  },

  mouse_down(args) {
    myMoveMouse('down', args);
  },

  mouse_left(args) {
    myMoveMouse('left', args);
  },

  mouse_right(args) {
    myMoveMouse('right', args);
  },

  mouse_position(args) {

  },

  draw_circle(args) {

  },

  draw_rectangle(args) {

  },

  draw_square(args) {

  },

  prnt_scrn(args) {

  },
};
