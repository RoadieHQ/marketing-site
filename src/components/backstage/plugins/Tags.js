import React from 'react';
import Chip from '@material-ui/core/Chip';

const Tags = ({ tags }) => (
  <div>
    {tags && tags.map((t, i) => {
    return <Chip
        size="small"
        key={i}
        label={t}
    />
    })}
  </div>
);

export default Tags;