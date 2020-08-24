import React from 'react';

const CriticalSkillsLink = ({ text = 'critical skills VISA program' }) => (
  <a
    href="https://dbei.gov.ie/en/What-We-Do/Workplace-and-Skills/Employment-Permits/Permit-Types/Critical-Skills-Employment-Permit/"
    target="__blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
);

export default CriticalSkillsLink;
