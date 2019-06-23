import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Header, Input, Button, Label, Form,
} from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import { RegisterUser } from './RegisterQuery';
// import { Test } from './Register.styles';

const Register = ({ registerUser, history }) => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fieldErrors, setErrors] = useState([]);

  const handleSubmit = async () => {
    const response = await registerUser({
      variables: {
        username,
        email,
        password,
      },
    });
    const { ok, errors } = response.data.register;
    if (ok) {
      history.push('/');
    } else {
      setErrors(errors);
    }
  };

  const err = { usernameError: '', passwordError: '', emailError: '' };
  fieldErrors.forEach(({ path, message }) => {
    err[`${path}Error`] = message;
  });

  return (
    <Container text>
      <Header as="h2">Register</Header>
      <Form>

        <Form.Field>
          <Input
            value={username}
            error={Boolean(err.usernameError)}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
            fluid
          />
          {Boolean(err.usernameError) && (
            <Label basic color="red" pointing="above">
              {err.usernameError}
            </Label>
          )}
        </Form.Field>
        <Form.Field>
          <Input
            value={email}
            error={Boolean(err.emailError)}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            fluid
          />
          {Boolean(err.emailError) && (
            <Label basic color="red" pointing="above">
              {err.emailError}
            </Label>
          )}
        </Form.Field>
        <Form.Field>
          <Input
            value={password}
            error={Boolean(err.passwordError)}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            type="password"
            fluid
          />
          {Boolean(err.passwordError) && (
            <Label basic color="red" pointing="above">
              {err.passwordError}
            </Label>
          )}
        </Form.Field>
        <Button primary onClick={handleSubmit}>Register</Button>
      </Form>
    </Container>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

Register.defaultProps = {
  // bla: 'test',
};

export default graphql(RegisterUser, { name: 'registerUser' })(Register);
