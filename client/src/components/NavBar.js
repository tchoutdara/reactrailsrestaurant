import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { isAuthenticated, logout } from '../fakeAuth'
import { Menu } from 'semantic-ui-react'


const styles = {
    active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'grey',
    }
}

const additionalLinks = (history) => {
    if (isAuthenticated()) {
        return (
            <Menu>
 
                <Menu.Item>
                <NavLink activeStyle={styles.active} to="/menu">Menu</NavLink>
                </Menu.Item>
                <Menu.Item>
                <a href="#" onClick={() => {
                    logout()
                    history.push("/login")
                }}>
                Logout
                </a>
                </Menu.Item>
                </Menu>
        )

    } else {
        return (
            <Menu.Item>
            <NavLink activeStyle={styles.active} to="/login">Login</NavLink>
            </Menu.Item>
        )
    }
}

const NavBar = ({ history }) => (
    <Menu>
    <Menu.Item>
      <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink activeStyle={styles.active} to="/about">About</NavLink>
      </Menu.Item>
      {additionalLinks(history)}
      
    </Menu>
  )
  
  export default withRouter(NavBar)