import React from 'react';
import {
  Container,
  Icon,
  FormWrap,
  FormContent,
  Form,
} from './SignInPage.Styled';

const SignInPage = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">eCash</Icon>
        <FormContent>
          <Form action="#">
            <h1>Sign in to your account</h1>
            <label htmlFor="for">Email</label>
            <input type="email" required placeholder="Enter Your Email" />
            <label htmlFor="for">Password</label>
            <input type="password" required placeholder="Enter your password" />
            <button type="submit">Continue</button>
            <span>Forgot password</span>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignInPage;
