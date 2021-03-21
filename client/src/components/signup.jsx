import React from "react";
import "../css/auth.css";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Message,
  Image,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import Amovie from "../css/images/Amovie.gif";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      loading: false,
      error: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // this.setState({ loading: true });
    if (this.state.password === this.state.confirmPassword) {
      console.log("azerty", this.state.password === this.state.confirmPassword);

      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then((response) => {
        console.log("response", response);
        window.location.href = "/home";
      });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <>
        <div className="box">
          <Segment size="big" floated="right"  placeholder>
            <Grid columns={2} relaxed="very" stackable>
              <Grid.Column>
                <Form>
                  <Form.Input
                    icon="mail"
                    iconPosition="left"
                    label="Email"
                    placeholder="Email"
                    required
                    id="email"
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    icon="user"
                    iconPosition="left"
                    label="Username"
                    placeholder="Username"
                    required
                    id="username"
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    icon="lock"
                    iconPosition="left"
                    label="Password"
                    type="password"
                    placeholder="********"
                    required
                    id="password"
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    icon="lock"
                    iconPosition="left"
                    label="Confirm your password"
                    type="password"
                    placeholder="********"
                    required
                    id="confirmPassword"
                    onChange={this.handleChange}
                  />
                  {this.error ? (
                    <Message negative>
                      <Message.Header>
                        Password don't match retry again
                      </Message.Header>
                    </Message>
                  ) : null}

                  <Button
                    content="Sign Up"
                    color="teal"
                    onClick={this.handleSubmit}
                  />
                </Form>
              </Grid.Column>

              <Grid.Column verticalAlign="middle">
                <Link to="/signin">
                  <Button content="Sign in" icon="sign-in" size="big" />
                </Link>
                <Message
                  color="teal"
                  size="small"
                  floating
                  header="You have an account ?"
                />
              </Grid.Column>
            </Grid>

            <Divider vertical>Or</Divider>
          </Segment>
        </div>
        <div className="boxImage">
          <Image src={Amovie} size='massive' floated="left" fluid />
        </div>
      </>
    );
  }
}

export default Signup;
