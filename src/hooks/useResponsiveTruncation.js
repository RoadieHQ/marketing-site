import { useState, useEffect } from 'react';
import useMedia from 'react-use/lib/useMedia';
import theme from '../theme';

// [DT] I feel like there must be a pure CSS solution to this problem but I couldn't figure
// out how to do it.
const useResponsiveTruncation = ({
  smChars = 20,
  mdChars = 20,
  lgChars = 30,
  xlChars = 40,
} = {}) => {
  const [length, setLength] = useState(smChars);
  const isMD = useMedia(`(min-width: ${theme.BREAKPOINTS_MD})`);
  const isLG = useMedia(`(min-width: ${theme.BREAKPOINTS_LG})`);
  const isXL = useMedia(`(min-width: ${theme.BREAKPOINTS_XL})`);

  useEffect(() => {
    if (isMD) setLength(mdChars);
    if (isLG) setLength(lgChars);
    if (isXL) setLength(xlChars);
  }, [isMD, isLG, isXL]);

  return length;
};

export default useResponsiveTruncation;
