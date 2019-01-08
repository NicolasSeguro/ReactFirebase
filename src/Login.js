import React, {Component} from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById('root'));

class Login extends Component {
       
    render(){
        return (
            <div className="Login">
                <div>
                    <label>Email</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password"></input>
                </div>
            </div>
        );
    }


}

export default Login; 