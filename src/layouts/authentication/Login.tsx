import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import logo from "../../calendar.svg"
import { ILogin } from "../../models";
import { login } from "../../stores/actions/authActions";
import { IApplicationState } from "../../stores/store";

interface IProps {
    isLoggedIn: boolean;
    login: (model: ILogin) => void;
}
interface IState {
    email: string;
    password: string;
}
const initState: IState = {
    email: "",
    password: "",
};
export class LoginComponent extends React.Component<IProps, IState>{
    state: IState = { ...initState }

    inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    formSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.login({ email, password });
        this.setState({ ...initState });
    }
    render() {
        const { email, password } = this.state;
        if (this.props.isLoggedIn) {
            return <Redirect to="/home" />
        }
        return (
            <div className="text-center">
                <form className="form-signin" onSubmit={this.formSubmitHandler}>
                    <img className="mb-4" src={logo} alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
                    <label className="sr-only">Email</label>
                    <input type="email" name="email" className="form-control" placeholder="Email" required autoFocus
                        onChange={this.inputChangeHandler} value={email} />
                    <label className="sr-only">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Parola" required
                        onChange={this.inputChangeHandler} value={password} />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
                    <Link to="/register"> Create an Account!</Link>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (store: IApplicationState) => {
    return {
        isLoggedIn: store.auth.isAuthenticated
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        login: (model: ILogin) => dispatch(login(model))
    };
};
const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
export { connectedLogin as Login }