import { useFormik, FormikHandlers } from 'formik';

export type FieldProps = Partial<{
  name: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  error: string;
  touched: boolean;
}>;

const getFormikFieldPropsGetter = (formik: ReturnType<typeof useFormik>) => (
  name: string
): FieldProps => {
  const { onChange, onBlur, value, error, touched } = {
    ...formik.getFieldProps(name),
    ...formik.getFieldMeta(name),
    ...formik.getFieldHelpers(name)
  };
  return { name, onChange, onBlur, value, error, touched };
};

export default getFormikFieldPropsGetter;
