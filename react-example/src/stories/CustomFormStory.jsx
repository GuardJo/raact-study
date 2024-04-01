import { storiesOf } from "@storybook/react";
import React from "react";
import FormSubmitButton from "../06/FormSubmitButton";
import FormProvider from "../06/FormProvider";
import { action } from "@storybook/addon-actions";
import FormConsumer from "../06/FormConsumer";

const validate = ({name, age}) => {
    let errors = {};
    if (!name) errors['name'] = 'Wrong Name';
    if (age && age < 18) errors['age'] = 'Wrong Age';

    return errors;
}

storiesOf('CustomForm', module)
.addWithJSX("기본 설정", () => {
    return (
        <FormProvider validate={validate} onSubmit={action('Submit Form!')}>
            <FormConsumer name='name' label='이름'/>
            <FormConsumer name='age' label='나이'/>
            <FormConsumer name='totalAmount' label='금액'/>
            <FormSubmitButton>전송</FormSubmitButton>
        </FormProvider>
    );
});