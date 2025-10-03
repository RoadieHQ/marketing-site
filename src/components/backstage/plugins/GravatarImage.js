import React, { useState, useEffect } from 'react';

async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

  return hashHex;
}
const GravatarImage = ({ email, name, className = 'h-16 w-16 rounded-full', ...props }) => {
  const [hashedEmail, setHashedEmail] = useState('');

  useEffect(() => {
    if (email) {
      sha256(email.trim().toLowerCase()).then(setHashedEmail);
    }
  }, [email]);

  const src = `https://gravatar.com/avatar/${hashedEmail}?d=initials&r=g&name=${name}`;

  return (
    <picture>
      <img src={src} className={className} alt={`The Gravatar of ${name}`} {...props} />
    </picture>
  );
};

export default GravatarImage;
