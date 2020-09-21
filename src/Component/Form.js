import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            skills: 'React'
        }
    }

    userNameChange = (event) => {
        this.setState(
            { username: event.target.value }
        )
    }

    commentsChange = (event) => {
        this.setState(
            {
                comments: event.target.value
            }
        )
    }

    skillsChange = (event) => {
        this.setState(
            {
                skills: event.target.value
            }
        )
    }
    SubmitTheForm = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.skills}`)
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.SubmitTheForm}>
                    <div>
                        <label>Username   </label>
                        <input type="text" value={this.state.username} onChange={this.userNameChange}>
                        </input>
                    </div><br />
                    <div>
                        <label>Comments</label>
                        <textarea value={this.state.comments} onChange={this.commentsChange}>
                        </textarea>
                    </div><br />
                    <div>
                        <label>Skills</label>
                        <select value={this.state.skills} onChange={this.skillsChange}>
                            <option value="React">React</option>
                            <option value="angular">Angular</option>
                            <option value="C#"> C#</option>
                        </select>
                    </div><br />
                    <div>
                        <button>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
