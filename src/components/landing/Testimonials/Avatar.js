import React from 'react';

const Avatar = ({ avatar, borderColor = 'white' }) => (
  <div className={`flex-shrink-0 inline-flex rounded-full border-2 border-${borderColor}`}>
    <picture>
      <source srcSet={avatar.webp} type="image/webp" />
      {avatar.png && <source srcSet={avatar.png} type="image/png" />}
      {avatar.jpeg && <source srcSet={avatar.jpeg} type="image/jpeg" />}

      <img src={avatar.jpeg || avatar.png} alt={avatar.alt} className="h-16 w-16 rounded-full" />
    </picture>
  </div>
);

export default Avatar;
