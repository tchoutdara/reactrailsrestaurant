import React, { Fragment } from 'react'
import { login } from '../fakeAuth'
import { Button } from 'semantic-ui-react'


const Login = ({ history }) => (
  <Fragment>
    <h2>Login</h2>
    <Button primary onClick={ () => {
        login()
        history.push('/menu')
    }}>
        Login
    </Button>
  </Fragment>
)

export default Login;