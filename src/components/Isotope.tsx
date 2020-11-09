import React, {
  FC,
  ComponentType,
  Fragment,
  useRef,
  useEffect,
  useState,
  useCallback
} from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { css } from '@emotion/core';
import { useWindowResize } from '@src/utils';

export interface ContentType {
  className?: string;
  ref?: React.Ref<HTMLElement>;
}

interface Props {
  data: unknown[];
  filterBy: string[];
  render: (props: unknown) => unknown;
  Component: ComponentType<ContentType>;
  duration?: number;
}

const Isotope: FC<Props> = ({ data, filterBy, render, Component, duration = 300 }) => {
  const hiddenContainerRef = useRef();
  const [positions, setPositions] = useState({});
  const [width, setWidth] = useState(0);

  const updatePositions = useCallback(() => {
    if (hiddenContainerRef.current) {
      const hiddenContainer = hiddenContainerRef.current as HTMLElement;
      setWidth(hiddenContainer.offsetWidth);
      const items = Array.from(hiddenContainer.children);
      setPositions((prev) => ({
        ...prev,
        ...items.reduce(
          (acc, item: HTMLElement) => ({
            ...acc,
            [item.id]: [item.offsetLeft, item.offsetTop]
          }),
          {}
        )
      }));
    }
  }, []);

  useWindowResize(updatePositions);

  useEffect(updatePositions, [updatePositions, filterBy]);

  let newData = data;
  if (filterBy.length) {
    newData = data.filter(({ tags }) => filterBy.some((tag) => tags.includes(tag)));
  }
  return (
    <Fragment>
      <TransitionGroup style={{ width }} component={Component}>
        {newData.map((props: Record<string, unknown>) => (
          <Transition
            key={props.id}
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={duration}
          >
            {(state) => {
              const [left, top] = positions[props.id as string] || [0, 0];
              const animCss = css`
                will-change: transform;
                transition: transform ${duration}ms;
                transform-origin: ${left}px ${top}px;
                position: absolute;
                top: 0;
                left: 0;
                transform: scale(0) translate(${left}px, ${top}px);
                ${['entering', 'entered'].includes(state) &&
                css`
                  transform: scale(1) translate(${left}px, ${top}px);
                `}
              `;
              return render({ ...props, css: animCss });
            }}
          </Transition>
        ))}
      </TransitionGroup>
      <Component
        ref={hiddenContainerRef}
        className="shadowIsotopeContent"
        css={css`
          visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
        `}
      >
        {newData.map(render)}
      </Component>
    </Fragment>
  );
};

export default Isotope;
