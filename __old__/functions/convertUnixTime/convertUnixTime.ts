import { fromUnixTime } from 'date-fns';

export const convertUnixTime = (time: string | number) =>
  typeof time === 'string' ? new Date(time) : fromUnixTime(time);
