import { PICTURE_PATH } from '../constants';

export const getPicturesPath = (pictureName: string): string => `${PICTURE_PATH}/${pictureName}`;
