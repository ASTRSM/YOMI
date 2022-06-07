export const HumanizeLvlStr = (str) => {
  if (str.includes('checkpoint')) {
    str = str.slice(7)
  }
  return str.replace(/.{1}$/,' $&').toUpperCase() ;
}