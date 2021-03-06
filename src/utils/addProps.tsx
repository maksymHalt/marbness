import React, { ComponentType, FC, forwardRef } from 'react';

type addPropsType = <T>(Component: ComponentType<T>, addedProps: T) => FC<Partial<T>>;

const addProps: addPropsType = (Component, addedProps) => {
  const newComponent = (props, ref) => <Component ref={ref} {...addedProps} {...props} />;
  newComponent.displayName = Component.displayName;
  return forwardRef(newComponent);
};

export default addProps;
