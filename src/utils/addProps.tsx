import React, { ComponentType, FC } from 'react';

type addPropsType = (x: ComponentType, y: Record<string, unknown>) => FC;

const addProps: addPropsType = (Component, addedProps) => (props) => (
  <Component {...addedProps} {...props} />
);

export default addProps;
