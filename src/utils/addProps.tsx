import React, { ComponentType, FC } from 'react';

type addPropsType = <T>(
  Component: ComponentType<T>,
  addedProps: Record<string, unknown>
) => FC<T>;

const addProps: addPropsType = (Component, addedProps) => (props) => (
  <Component {...addedProps} {...props} />
);

export default addProps;
