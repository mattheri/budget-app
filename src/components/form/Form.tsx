import { ReactNode } from "react";
import { Form as FormikForm, Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import Input from "./input/Input";
import Select from "./select/Select";
import Datepicker from "./datepicker/Datepicker";

interface Props<
  InitialValues extends Record<string, boolean | number | string | undefined>
> {
  initialValues: InitialValues;
  onSubmit: (
    values: InitialValues,
    helpers?: FormikHelpers<InitialValues>
  ) => void;
  validationSchema?: { [P in keyof InitialValues]?: yup.SchemaOf<any> };
  children?: ReactNode;
}

const Form = <
  InitialValues extends Record<string, boolean | number | string | undefined>
>({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: Props<InitialValues>) => {
  const shouldValidate = validationSchema !== undefined;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnChange={shouldValidate}
      validationSchema={validationSchema}
    >
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
};

export default Object.assign(Form, {
  Input: Input,
  Select: Select,
  Datepicker: Datepicker,
});
