import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import logo from "../../calendar.svg"
import { IRegister, IUser } from "../../models";
import { register } from "../../stores/actions/authActions";
import { IApplicationState } from "../../stores/store";

interface IProps {
    isLoggedIn: boolean;
    register: (model: IRegister) => void;
}
interface IState {
    user: IUser & { rePassword: string }
    errors: string[]
}

export class RegisterComponent extends React.Component<IProps, IState> {
    state: IState = {
        user: {
            id: 0,
            lastname: "",
            name: "",
            password: "",
            rePassword: "",
            username: "",
            email: ""
        },
        errors: []
    }
    inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ ...this.state, user: { ...this.state.user, [e.target.name]: e.target.value } })
    }
    formSubmitHandler = (e: React.FormEvent) => {
        const { user } = this.state;
        let errors = []
        e.preventDefault();
        if (user.password !== user.rePassword) {
            errors.push("passwords doesn't match")
            this.setState({ user, errors })
        } else {
            this.props.register(this.state.user)
        }
    }
    render() {
        if (this.props.isLoggedIn) {
            return <Redirect to="/home" />
        }
        const { user, errors } = this.state;
        const warnings = errors.length > 0 ? (
            <div className="alert alert-danger" role="alert">
                {errors.map((e, i) => (<li key={i}>{e}</li>))}
            </div>) : ""
        return (
            <div className="text-center">
                <form className="form-signin" onSubmit={this.formSubmitHandler} autoComplete="off">
                    <img className="mb-4" src={logo} alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                    {warnings}
                    <label className="sr-only">Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Name" required autoComplete="off"
                        onChange={this.inputChangeHandler} value={user.name} />

                    <label className="sr-only">Lastname</label>
                    <input type="text" name="lastname" className="form-control" placeholder="Lastname" required autoComplete="off"
                        onChange={this.inputChangeHandler} value={user.lastname} />

                    <label className="sr-only">Username</label>
                    <input type="text" name="username" className="form-control" placeholder="Username" required autoComplete="off"
                        onChange={this.inputChangeHandler} value={user.username} />

                    <label className="sr-only">Email</label>
                    <input type="email" name="email" className="form-control" placeholder="Email" required
                        onChange={this.inputChangeHandler} value={user.email} />

                    <label className="sr-only">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Password" required
                        onChange={this.inputChangeHandler} value={user.password} />

                    <label className="sr-only">Password Again</label>
                    <input type="password" name="rePassword" className="form-control" placeholder="Password Again" required
                        onChange={this.inputChangeHandler} value={user.rePassword} />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                    <p>Already have an account? <Link to="/login"> Sign In</Link></p>
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
        register: (model: IRegister) => dispatch(register(model))
    };
};
const connectedRegister = connect(mapStateToProps, mapDispatchToProps)(RegisterComponent)
export { connectedRegister as Register }