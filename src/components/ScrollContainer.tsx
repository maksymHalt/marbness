import React, { FC } from 'react';
import DragScroll from 'react-indiana-drag-scroll';
import Scrollbars from 'react-scrollbars-custom';
import { COLORS } from '@src/styles';

interface Props {
  className?: string;
  getScroller?: (el: HTMLElement) => void;
}

const TrackHorizontal = ({ elementRef, style, ...restProps }) => (
  <span
    {...restProps}
    ref={elementRef}
    className="TrackX"
    style={{ ...style, height: 6 }}
  />
);
const ThumbHorizontal = ({ elementRef, style, ...restProps }) => (
  <div
    {...restProps}
    ref={elementRef}
    className="ThUmBX"
    style={{ ...style, background: COLORS.violetSolid }}
  />
);

const ScrollContainer: FC<Props> = ({ children, className, getScroller }) => {
  const Scroller = ({ elementRef, ...restProps }) => (
    <DragScroll
      {...restProps}
      ref={(instance) => {
        if (instance) {
          const el = instance.getElement();
          if (getScroller) {
            getScroller(el);
          }
          elementRef(el);
        }
      }}
      className="MyAwesomeScrollbarsScroller"
    />
  );

  return (
    <Scrollbars
      className={className}
      trackXProps={{ renderer: TrackHorizontal }}
      scrollerProps={{ renderer: Scroller }}
      thumbXProps={{ renderer: ThumbHorizontal }}
    >
      {children}
    </Scrollbars>
  );
};

export default ScrollContainer;
