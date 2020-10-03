import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Title,
  BlockTitle,
  CheckboxGroup,
  Input,
  Space,
  Textarea,
  Button
} from '@src/components';
import { addProps, getFormikFieldPropsGetter, mq } from '@src/utils';

const checkboxGroupDataList = [
  { name: 'interfaceDesign', label: 'Interface Design' },
  { name: 'development', label: 'Development' },
  { name: 'brandIdentity', label: 'Brand Identity' },
  { name: 'uxAudit', label: 'UX Audit' }
];

const HireUsBlock: FC = () => {
  const formik = useFormik({
    initialValues: {
      services: [],
      fullName: '',
      email: '',
      details: '',
      attachments: []
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      details: Yup.string().min(10, 'Please, tell us more (minimum ${min} characters)'),
      attachments: Yup.array().max(
        10,
        ({ value, max }) => `Maximum ${max} files. It is currently ${value.length}`
      )
    }),
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.warn(values);
    }
  });

  const getFieldProps = getFormikFieldPropsGetter(formik);

  return (
    <>
      <BlockTitle>Hire Us</BlockTitle>
      <Title level={1}>What a brilliant project?</Title>
      <Form onSubmit={formik.handleSubmit}>
        <FormLine>
          <CheckboxGroup
            label="Services"
            dataList={checkboxGroupDataList}
            {...getFieldProps('services')}
          />
        </FormLine>
        <FormLine>
          <Input label="Full name" {...getFieldProps('fullName')} />
          <Input label="Email" {...getFieldProps('email')} />
        </FormLine>
        <FormLine>
          <Textarea
            label="Project details (optional)"
            {...getFieldProps('details')}
            attachmentProps={getFieldProps('attachments')}
          />
        </FormLine>
        <Button htmlType="submit" fullWidth>
          Send Message
        </Button>
      </Form>
    </>
  );
};

export default HireUsBlock;

const Form = styled.form`
  margin-top: 64px;
  ${mq('T')} {
    margin-top: 40px;
  }
`;

const FormLine = styled(addProps(Space, { size: 24, stretchContent: true }))`
  margin-bottom: 24px;
  align-items: flex-end;

  > * {
    flex-basis: 0;
  }
`;
