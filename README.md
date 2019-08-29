# Name Shorten

[![npm (scoped)](https://img.shields.io/npm/v/name-shorten.svg)](https://www.npmjs.com/package/name-shorten)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/name-shorten)](https://www.npmjs.com/package/name-shorten)

## Takes long names turns them into a shortened version

To use:

1. ```yarn add name-shorten```


#### Example:

    import React, { Component } from 'react'
    import nameShorten from 'name-shorten'

    class App extends Component {
        state = {
            firstName: '',
            lastName: '',
            shortName: ''
        }

        onInputChange = e => {
            this.setState({
            [e.target.name]: e.target.value,
             shortName: ''
        })

        getShortName = () => {
            const { firstName, lastName } = this.state
            const shortenedName = nameShorten(firstName, lastName)

            this.setState({
                shortName: shortenedName
            })
        }


        render() {
            const { firstName, lastName, shortName } = this.state
            return (
            <div className="App">
                <h1>Name Shortener</h1>
                <p>Shorten long names down to a max of 18 characters</p>
    
                <div className="nameContainer">
                    <input 
                        value={firstName} 
                        type="text" 
                        maxLength={15} 
                        placeholder="First Name" 
                        name="firstName"
                        onChange={this.onInputChange}
                    />
                    <input 
                        value={lastName} 
                        type="text" 
                        maxLength={15} 
                        placeholder="Last Name" 
                        name="lastName"
                        onChange={this.onInputChange}
                    />
                </div>
                <button onClick={this.getShortName}>Submit</button>
                {shortName !== '' &&
                <div className="resultContainer">
                    <p>{shortName}</p>
                </div>
                }
            </div>
            )
        }
    }

    export default App
