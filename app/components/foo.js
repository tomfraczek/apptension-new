'use client';

export const Foo = ({ data }) => {
  console.log(data);
  return <div>{data.topSection.sectionTitle}</div>;
};
