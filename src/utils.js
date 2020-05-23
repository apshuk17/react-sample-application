export const getAllFilterValues = (input, fieldToFilter, subField) => {
  const output = input.reduce((acc, item) => {
    const itemToBeFiltered = subField
      ? item[fieldToFilter][subField]
      : item[fieldToFilter];
    if (!acc.some(item => item?.label === itemToBeFiltered)) {
        acc.push({ label: itemToBeFiltered, checked: true });
    }
    return acc;
  }, []);
  return { name: fieldToFilter, values: output };
};
