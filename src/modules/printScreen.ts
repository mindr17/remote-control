import Jimp from 'jimp';
import { getMousePos, getPixelColor, screen } from 'robotjs';

export const printScreen = async (duplex, args) => {
  const { x, y } = getMousePos();
  
  const scr = screen.capture(x, y, 200, 200);
  const img = new Jimp(scr.width, scr.height);
  
  const image = img.getBase64Async((Jimp.MIME_PNG));

  return image;
};
