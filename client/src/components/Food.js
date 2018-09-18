import React from 'react'
import axios from 'axios'
import Form from './Form'
import { Button } from 'semantic-ui-react'

class Food extends React.Component {
    state = { food: {}, edit: false }

    componentDidMount() {
        axios.get(`/api/foods/${this.props.match.params.id}`)
        .then( res => this.setState({ food: res.data }) )
    }
    toggleEdit = () => {
        this.setState( state => {
            return { edit: !this.state.edit }
        })
    }

    submit = (food) => {
        axios.put(`/api/foods/${this.props.match.params.id}`, { food })
        .then( res => this.setState({ food: res.data, edit: false }) )
    }

    show() {
        const { food: { name, description, price }} = this.state;
        return (
            <div>
                <h1>{name}</h1>
                <h3>{description}</h3>
                <h3>${price}</h3>
            </div>
        )
    }

    edit() {
        return <Form {...this.state.food} submit={this.submit} />
    }

    render() {
        const { edit } = this.state
        return (
            <div>
                { edit ? this.edit() : this.show() }
                <Button primary size="small" onClick={this.toggleEdit}>{ edit ? 'Cancel' : 'Edit' }</Button>
            </div>    
        )
    }
}

export default Food