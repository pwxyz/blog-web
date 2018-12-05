import hexRgb from 'hex-rgb';


const isDark = (str: string) => {
  let strs = str[0] === '#' ? str : `#${str}`;
  let arr = hexRgb(strs, { format: 'array' });
  return arr[3] > 0.56;
};

export default isDark;