import React from 'react';
import format from 'date-fns/format';

const PublishDate = ({ issue }) => {
  const { publishDate } = issue;
  console.log('pub', publishDate, !publishDate);
  if (!publishDate) {
    return <span className="text-gray-600">Draft</span>;
  }

  let date;
  let formattedDate;
  try {
    date = Date.parse(publishDate);
    formattedDate = format(date, 'MMMM do, yyyy');
  } catch (error) {
    console.warn(`Error parsing date ${publishDate}`, error);
    return null;
  }

  return (
    <time dateTime={issue.publishDate}>
      {formattedDate}
    </time>
  );
};

export default PublishDate;
