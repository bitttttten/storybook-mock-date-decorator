import React from 'react';
import './date-label.css';

interface DateLabelProps {
  date?: Date;
  primary?: boolean;
}

export const DateLabel = ({ date = new Date(), primary = false, ...props }: DateLabelProps) => {
  const mode = primary ? 'date-label--primary' : 'date-label--secondary';
  return (
    <div className={['date-label', mode].join(' ')} {...props}>
      {date.toDateString()} at {date.toTimeString()}
    </div>
  );
};
