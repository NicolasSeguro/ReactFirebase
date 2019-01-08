import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Perfil from './Perfil';
import Link from 'react-router-dom';

ReactDOM.render(<App />, document.getElementById('root')); 

class Home extends Component {
    perfiles;
    constructor(props) {
        super(props)
        console.log (props.match.params.number)
        this.state = {
            error: null,
            isLoaded: false,
            perfiles: []
        };
    }

    componentDidMount(){
          fetch("https://jsonplaceholder.typecode.com/users")
          .then(res => res.json())
          .then(
              (result) => {
                  console.log(result)
                  this.setState({
                      isLoaded: true,
                      perfiles: result
                  });
              },

              (error) =>{
                  console.log(error)
                  this.setState({
                      isLoaded:true,
                      error
                  });
              }
          )
    }

    render() {
        const { error, isLoaded, perfiles} = this.state;
        if(error) {
            return<div>Error: {error.message} </div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <ul>
                    {perfiles.map(
                        Perfil=><Perfil datos={Perfil}/>)
                        }
                </ul>
            );
        }
    }
}
