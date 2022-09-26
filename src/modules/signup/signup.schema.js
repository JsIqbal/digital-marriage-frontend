// all schema validation will be here.

import { string, object } from 'yup';

export const loginSchema = object().shape(
    {
        mobile: string()
            .required("This field must not be empty.")
    }
);

export const recievedCodeSchema = object().shape(
    {
        fieldOne: string()
            .max(1)
            .required("This field must not be empty."),
        fieldTwo: string()
            .max(1)
            .required("This field must not be empty."),
        fieldThree: string()
            .max(1)
            .required("This field must not be empty."),
        fieldFour: string()
            .max(1)
            .required("This field must not be empty."),
    }
);

export const profileSchema = object().shape(
    {
        firstName: string()
            .required("This field must not be empty.")
    }
)