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
            .required("This field must not be empty."),
        fieldTwo: string()
            .required("This field must not be empty."),
        fieldThree: string()
            .required("This field must not be empty."),
        fieldFour: string()
            .required("This field must not be empty."),
    }
);