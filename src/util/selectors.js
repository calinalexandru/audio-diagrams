export const getValueOrValues = (property,) =>
  property?.[property.valueType].value ||
  property?.[property.valueType]?.values?.join?.(',',);

export const noop = () => {};
