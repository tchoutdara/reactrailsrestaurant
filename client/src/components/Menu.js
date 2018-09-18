import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Form from './Form'
import { Button } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'

class Menu extends React.Component {
  state = { foods: [], showForm: false }

  componentDidMount() {
    axios.get('/api/foods')
      .then( res => this.setState({ foods: res.data }) )
  }

  show() {
    const { foods } = this.state
    return (
      <ul>
        { foods.map( p =>
            <li key={p.id}>
              <Link to={`/foods/${p.id}`}>
                {p.name}
              </Link>
            </li>
          )
        }
      </ul>
    )
  }

  form() {
    return <Form submit={this.submit} />
  }

  submit = (food) => {
    const { foods } = this.state
    axios.post('/api/foods', { food })
    .then( res => {
      this.setState({
        foods: [res.data, ...foods],
        showForm: false
      })
    })
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    const { showForm } = this.state
    return (
      <div>
        <Header as='h2' color='purple'>
            React Restaurant Foods!!!
         </Header>
        <Button primary size="small" onClick={this.toggleForm}>
          { showForm ? 'Hide' : 'Add to Menu' }
        </Button>
        { showForm ? this.form() : this.show() }
      </div>
    )
  }
}

export default Menu