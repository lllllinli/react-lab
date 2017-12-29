let count = 0;
export const setAddLove = () => {
  count = count + 1;
  return {
    type: 'LOVE_COUNT',
    count,
  };
};
