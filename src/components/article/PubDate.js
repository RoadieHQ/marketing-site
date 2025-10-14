import React from 'react';
import format from 'date-fns/format';

const PubDate = ({ date, formatToken =  'MMMM do, yyyy' }) => {
  if (!date) {
    return <span className="text-gray-600">Draft</span>;
  }

  let dateObj;
  let formattedDate;
  try {
    dateObj = new Date(Date.parse(date));
    formattedDate = format(dateObj, formatToken);
  } catch (error) {
    console.warn(`Error parsing date ${date}`, error);
    return null;
  }

  return (
    <time dateTime={dateObj.toISOString()}>
      {formattedDate}
    </time>
  );
};

export default PubDate;
