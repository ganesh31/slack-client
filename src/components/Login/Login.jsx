import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Header, Input, Button, Message, Form,
} from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import { LoginUser } from './LoginQuery';

const Login = ({ loginUser, history }) => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const handleLogin = async () => {
    const response = await loginUser({
      variables: {
        username,
        password,
      },
    });
    const {
      ok, errors: fieldErrors, token, refreshToken,
    } = response.data.login;
    if (ok) {
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      history.push('/');
    } else {
      setErrors(fieldErrors);
    }
  };

  return (
    <Container text>
      <Header as="h2">Login</Header>
      {errors.length ? (
        <Message negative>
          <Message.Header>{errors[0].path}</Message.Header>
          <p>{errors[0].message}</p>
        </Message>
      ) : null}
      <Form>
        <Form.Field error={!!errors.find(({ path }) => path === 'username')}>
          <Input
            value={username}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
            fluid
          />
        </Form.Field>
        <Form.Field error={!!(errors.find(({ path }) => path === 'password'))}>
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            type="password"
            fluid
          />
        </Form.Field>
        <Button primary onClick={handleLogin} disabled={username === '' || password === ''}>Login</Button>
      </Form>
    </Container>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

Login.defaultProps = {
  // bla: 'test',
};

export default graphql(LoginUser, { name: 'loginUser' })(Login);
