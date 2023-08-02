import { format } from 'date-fns';
import { enUS, pl } from 'date-fns/locale';
import { useLocale } from 'next-intl';

import { convertUnixTime } from '@/functions/convertUnixTime/convertUnixTime';

interface Props {
  date: number;
  showUTC?: boolean;
}

export const DateFormat = ({ date, showUTC }: Props) => {
  const locale = useLocale();
  const currentTime = convertUnixTime(date);
  const currentTimeWithUtc = showUTC
    ? new Date(
        new Date(currentTime).toLocaleString('en-US', {
          timeZone: 'UTC'
        })
      )
    : currentTime;

  const getDateFormat = (dateFormat: string) => {
    return format(currentTimeWithUtc, dateFormat, {
      locale: locale === 'pl' ? pl : enUS
    });
  };

  const fullDate = getDateFormat('P p');

  return <span>{fullDate}</span>;
};
