import React, { useState } from 'react';
import PropTypes from 'prop-types';
import first from 'lodash/first';
import {
  Container, Header, Message, Form, Input, Button,
} from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import { CreateTeamMutation } from './CreateTeamQuery';
// import { Test } from './CreateTeam.styles';

const CreateTeam = ({ createTeam, history }) => {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState([]);

  const handleCreateTeam = async () => {
    let response = null;
    try {
      response = await createTeam({
        variables: {
          name,
        },
      });
    } catch (err) {
      history.push('/login');
      return;
    }
    const { ok, errors: fieldErrors } = response.data.createTeam;
    if (!ok) {
      setErrors(fieldErrors);
    } else {
      history.push('/');
    }
  };
  return (
    <Container text>
      <Header as="h2">Create A Team</Header>
      {errors.length ? (
        <Message negative>
          <Message.Header>{first(errors).path}</Message.Header>
          <p>{first(errors).message}</p>
        </Message>
      ) : null}
      <Form>
        <Form.Field error={!!errors.find(({ path }) => path === 'name')}>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your Team Name"
            fluid
          />
        </Form.Field>
        <Button primary onClick={handleCreateTeam} disabled={name === ''}>
          Create Team
        </Button>
      </Form>
    </Container>
  );
};

CreateTeam.propTypes = {
  createTeam: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

CreateTeam.defaultProps = {
  // bla: 'test',
};

export default graphql(CreateTeamMutation, { name: 'createTeam' })(CreateTeam);
