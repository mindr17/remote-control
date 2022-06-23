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

export const myMoveMouse = (direction: string, stream, args: Array<string>): void => {
  const distance = Number(args[0]);
  const oldPosition: IPosition = getMousePos();
  const newPosition: IPosition = getNewPosition[direction](oldPosition, distance);
  moveMouse(newPosition.x, newPosition.y);
  
  const str = 'aosdin 123 dfisn\0';

  const stringToBase64 = (str) => {
    const buff = Buffer.from(str, 'utf8');
    return buff.toString('base64');
  };
    
  const base64Data = stringToBase64(str);

  const msg = Buffer.from("Hello World").toString('base64')

  stream.write(str);

};
