// all schema validation will be here.

import { string, object } from 'yup';

export const loginSchema = object().shape(
    {
        mobile: string()
            .required("This field must not be empty.")
    }
);