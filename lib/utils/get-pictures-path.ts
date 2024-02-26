import { PICTURE_PATH } from '../constants';

export const getPicturePath = (pictureName: string): string => `${PICTURE_PATH}/${pictureName}`;
