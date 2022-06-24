import { getMousePos, moveMouse } from "robotjs";

interface IPosition {
  x: number;
  y: number;
};

const getNewPosition = {
  up(oldPosition: IPosition, distance) {
    return {
      x: oldPosition.x,
      y: oldPosition.y - distance,
    }
  },
  
  down(oldPosition, distance) {
    return {
      x: oldPosition.x,
      y: oldPosition.y + distance,
    }
  },

  left(oldPosition, distance) {
    return {
      x: oldPosition.x - distance,
      y: oldPosition.y,
    }
  },

  right(oldPosition, distance) {
    return {
      x: oldPosition.x + distance,
      y: oldPosition.y,
    }
  },
};

export const myMoveMouse = (direction: string, duplex, args: Array<string>): void => {
  const distance = Number(args[0]);
  const oldPosition: IPosition = getMousePos();
  const newPosition: IPosition = getNewPosition[direction](oldPosition, distance);
  moveMouse(newPosition.x, newPosition.y);
};
