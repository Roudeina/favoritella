import React, { useRef, useState } from "react"
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Message,
} from "semantic-ui-react";
import {Link} from "react-router-dom";


export default function Signin() {
  return (
    <Segment placeholder >
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column verticalAlign="middle">
            <Link to="/signup">
          <Button content="Sign up" icon="signup" size="big" />
          </Link>
          <Message
               color='teal'size='small' floating
              header="Dont have an account yet? Sign up to create one"
            />
        </Grid.Column>
        <Grid.Column>
          <Form>
            <Form.Input
              icon="user"
              iconPosition="left"
              label="Username"
              placeholder="Username"
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              label="Password"
              type="password"
              placeholder="********"
            />

            <Button content="Login" color='teal'/>

          </Form>
        </Grid.Column>
      </Grid>

      <Divider vertical>Or</Divider>
    </Segment>
  );
}
