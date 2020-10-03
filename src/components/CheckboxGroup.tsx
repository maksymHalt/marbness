import React, { FC, useEffect, useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { FieldProps } from '@src/utils';
import Space from './Space';
import Checkbox from './Checkbox';
import { Label } from './Input';

const Wrapper = styled.div`
  display: inline-block;
`;

interface Props extends FieldProps {
  className?: string;
  label?: string;
  dataList: { name: string; label: string }[];
}

const CheckboxGroup: FC<Props> = ({ className, name, label, dataList, onChange }) => {
  const [valueList, setValueList] = useState([]);
  const onCheckboxChange = useCallback(({ target: { name, checked } }) => {
    if (checked) {
      setValueList((valueList) => [...valueList, name]);
    } else {
      setValueList((valueList) => valueList.filter((item) => item !== name));
    }
  }, []);

  useEffect(() => {
    const syntheticEvent = { target: { name, value: valueList } };
    onChange(syntheticEvent);
  }, [name, valueList, onChange]);

  return (
    <Wrapper className={className}>
      {label && <Label>{label}</Label>}
      <GroupList>
        {dataList.map(({ name, label }) => (
          <GroupItem name={name} key={name} onChange={onCheckboxChange}>
            {label}
          </GroupItem>
        ))}
      </GroupList>
    </Wrapper>
  );
};

export default CheckboxGroup;

const GroupList = styled(Space)`
  flex-wrap: wrap;
`;
const GroupItem = styled(Checkbox)`
  margin-bottom: 8px;
`;
