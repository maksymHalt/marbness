import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { fromString, translate, multiply, toString } from 'rematrix';
import { throttle } from 'lodash';

const getRandomInRange = (min, max) => Math.random() * (max - min) + min;
const COEFFICIENT_MIN = 0.1;
const COEFFICIENT_MAX = 0.3;

const ParallaxBackground = ({ children }) => {
  const containerRef = useRef();
  useEffect(() => {
    const container = containerRef.current;
    const children = container.children;
    const childrenDataList = new Array(children.length)
      .fill({})
      .map((dataItem, index) => {
        const el = children[index];
        el.style.willChange = 'transform';
        el.style.transition = 'transform 0.1s ease-out';
        return {
          element: children[index],
          coefficient: getRandomInRange(COEFFICIENT_MIN, COEFFICIENT_MAX),
          initialTransformValue: fromString(getComputedStyle(children[index]).transform)
        };
      });
    const pointerMoveHandler = (e) => {
      throttle(
        () =>
          requestAnimationFrame(() => {
            const { screenX: x, screenY: y } = e;
            const { innerWidth: w, innerHeight: h } = window;
            childrenDataList.forEach((dataItem) => {
              const {
                element: el,
                coefficient: C,
                initialTransformValue: matrix
              } = dataItem;
              const t = translate(-(x - w / 2) * C, -(y - h / 2) * C);
              const newMatrix = multiply(matrix, t);
              el.style.transform = toString(newMatrix);
            });
          }),
        100
      )();
    };
    document.addEventListener('pointermove', pointerMoveHandler);
    return () => {
      document.removeEventListener('pointermove', pointerMoveHandler);
    };
  }, []);

  return <BackgroundContainer ref={containerRef}>{children}</BackgroundContainer>;
};

export default ParallaxBackground;

ParallaxBackground.propTypes = {
  children: PropTypes.node.isRequired
};

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
