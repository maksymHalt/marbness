import React, { FC, useState, useCallback, useRef } from 'react';
import { css, SerializedStyles } from '@emotion/core';
import styled from '@emotion/styled';
import {
  Title,
  Text,
  WidthContainer,
  BlockTitle,
  ParallaxBackground,
  Cube,
  CheckboxGroup,
  Isotope,
  ScrollContainer,
  ArrowRight,
  Button,
  ContentType
} from '@src/components';
import { COLORS } from '@src/styles';
import { addProps, mq } from '@src/utils';
import animateScrollTo from 'animated-scroll-to';

const CELL_WIDTH = 264;
const CELL_HEIGHT = 227;
const GRID_GAP = 24;
const SCROLLBAR_PADDING = 18;
const CELL_WIDTH_M = 164;
const CELL_HEIGHT_M = 127;
const GRID_GAP_M = 14;

type RenderItemType = { id: string; bg: string; size: number[]; css?: SerializedStyles };

const RenderItemWrapper = styled.div<RenderItemType>`
  background: ${({ bg }) => bg};
  background-size: cover;
  grid-column-end: span ${({ size: [w] }) => w};
  grid-row-end: span ${({ size: [, h] }) => h};
  width: ${({ size: [w] }) => w * CELL_WIDTH + (w - 1) * GRID_GAP}px;
  height: ${({ size: [, h] }) => h * CELL_HEIGHT + (h - 1) * GRID_GAP}px;
  border-radius: 12px;

  ${mq('M')} {
    width: ${({ size: [w] }) => w * CELL_WIDTH_M + (w - 1) * GRID_GAP_M}px;
    height: ${({ size: [, h] }) => h * CELL_HEIGHT_M + (h - 1) * GRID_GAP_M}px;
  }
`;

const renderItem = (props: RenderItemType) => (
  <RenderItemWrapper key={props.id} {...props} />
);

const Divider = styled.hr`
  border-top: 1px solid ${COLORS.white};
  border-bottom: 0;
  opacity: 0.3;
  width: 100%;
  margin: 20px 0 auto;

  ${mq('M')} {
    margin-top: 5px;
  }
`;

const ItemTitle = styled(Title)`
  ${mq('M')} {
    font-size: 12px;
  }
`;
const ItemText = styled(Text)`
  ${mq('M')} {
    font-size: 10px;
  }
`;

const renderTextItem = (props: RenderItemType) => (
  <RenderItemWrapper
    key={props.id}
    {...props}
    css={css`
      ${props.css || ''}
      color: ${COLORS.white};
      display: flex;
      flex-direction: column;
      padding: 24px;

      ${mq('M')} {
        padding: 16px;
      }
    `}
  >
    <ItemTitle level={3}>Complex brand creation & visualization</ItemTitle>
    <Divider />
    <ItemText weight="bold">AirCraft LTD</ItemText>
  </RenderItemWrapper>
);

const worksData = {
  filters: [
    { name: 'interfaceDesign', label: 'Interface Design' },
    { name: 'development', label: 'Development' },
    { name: 'brandIdentity', label: 'Brand Identity' },
    { name: 'uxAudit', label: 'UX Audit' }
  ],
  content: [
    {
      bg: 'url(./img/project-1.jpg)',
      size: [2, 2],
      renderItem,
      tags: ['interfaceDesign', 'development']
    },
    {
      bg: 'url(./img/project-2.jpg)',
      size: [2, 1],
      renderItem,
      tags: ['interfaceDesign', 'brandIdentity']
    },
    {
      bg: `${COLORS.violet}`,
      size: [1, 1],
      renderItem: renderTextItem,
      tags: ['uxAudit', 'development']
    },
    {
      bg: 'url(./img/project-3.jpg)',
      size: [1, 1],
      renderItem,
      tags: ['brandIdentity', 'uxAudit']
    },
    {
      bg: 'url(./img/project-4.jpg)',
      size: [1, 1],
      renderItem,
      tags: ['interfaceDesign', 'uxAudit']
    },
    {
      bg: 'url(./img/project-5.jpg)',
      size: [2, 1],
      renderItem,
      tags: ['brandIdentity', 'development']
    }
  ]
};
worksData.content = worksData.content.map((item, index) => ({
  id: `${index}`,
  ...item
}));

const WorksSection: FC = () => {
  const [filterBy, setFilterBy] = useState([]);
  const onFilterChange = useCallback(({ target: { value } }) => {
    setFilterBy(value);
  }, []);
  const scrollerRef = useRef<HTMLElement>();

  return (
    <Container>
      <ParallaxBackground>
        <Cube1 />
      </ParallaxBackground>
      <Content>
        <BlockTitle>Works</BlockTitle>
        <Title level={1}>Latest projects</Title>
        <FilterGroup dataList={worksData.filters} onChange={onFilterChange} />
      </Content>
      <ScrollWrapper getScroller={(el) => (scrollerRef.current = el)}>
        <Isotope
          data={worksData.content}
          filterBy={filterBy}
          render={({ renderItem, ...props }) => renderItem(props)}
          Component={ContentList}
        />
      </ScrollWrapper>
      <Content>
        <ScrollerWrapper>
          <ScrollerToEnd
            onClick={() => {
              const scrollerContainer = scrollerRef.current;
              const content = scrollerContainer.querySelector(
                '.shadowIsotopeContent'
              ) as HTMLElement;
              const contentWidth = content.offsetWidth;
              animateScrollTo([contentWidth, 0], {
                elementToScroll: scrollerRef.current
              });
            }}
          >
            View full portfolio <ArrowRight />
          </ScrollerToEnd>
        </ScrollerWrapper>
      </Content>
    </Container>
  );
};

export default WorksSection;

const Container = styled.section`
  position: relative;
  padding-top: 125px;
  padding-bottom: 95px;
`;

const Cube1 = styled(addProps(Cube, { size: 224, color: 'faded' }))`
  top: 100px;
  left: -112px;
`;

const Content = styled(WidthContainer)`
  position: relative;
`;

const FilterGroup = styled(CheckboxGroup)`
  margin: 40px 0 24px;
`;

const ScrollWrapper = styled(ScrollContainer)`
  height: ${CELL_HEIGHT * 2 + GRID_GAP + SCROLLBAR_PADDING}px !important;

  ${mq('M')} {
    height: ${CELL_HEIGHT_M * 2 + GRID_GAP_M + SCROLLBAR_PADDING}px !important;
  }
`;

const ContentList = styled.div<ContentType>`
  position: relative;
  height: ${CELL_HEIGHT * 2 + GRID_GAP}px;
  padding: 0 calc((100% - 1128px) / 2);
  display: inline-grid;
  grid-auto-flow: column;
  grid-template: repeat(2, 1fr) / repeat(auto-fit, ${CELL_WIDTH}px);
  grid-gap: ${GRID_GAP}px;
  z-index: 0;

  ${mq('T')} {
    padding: 0 calc((100% - 768px) / 2);
  }

  ${mq('M')} {
    padding: 0 calc((100% - 320px) / 2);

    grid-template: repeat(2, 1fr) / repeat(auto-fit, ${CELL_WIDTH_M}px);
    height: ${CELL_HEIGHT_M * 2 + GRID_GAP_M}px;
    grid-gap: ${GRID_GAP_M}px;
  }
`;

const ScrollerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const ScrollerToEnd = addProps(Button, { type: 'simple' });
