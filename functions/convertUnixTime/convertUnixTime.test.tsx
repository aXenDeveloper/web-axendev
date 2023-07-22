import { expect, describe, it } from 'vitest';

import { convertUnixTime } from './convertUnixTime';

describe('convertUnixTime', () => {
  it('check convert date form UNIX', () => {
    const current = convertUnixTime(1652426469);

    expect(current).toStrictEqual(new Date('2022-05-13T07:21:09.000Z'));
  });

  it('check convert date form Date', () => {
    const current = convertUnixTime('2022-05-13T07:21:09.000Z');

    expect(current).toStrictEqual(new Date('2022-05-13T07:21:09.000Z'));
  });
});
