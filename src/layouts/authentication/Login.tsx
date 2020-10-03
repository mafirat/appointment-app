import React from "react";
import { Link } from "react-router-dom";
import logo from "../../calendar.svg"

interface IProps {

}
interface IState {
    email: string;
    password: string;
    errors: string[]
}
export class Login extends React.Component<IProps, IState>{
    state: IState = {
        email: "",
        password: "",
        errors: []
    }

    inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    formSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const { email, password } = this.state;
        let errors = []
        console.log({ email, password });

    }
    render() {
        const { email, password, errors } = this.state;
        const warnings = errors.length > 0 ? (
            <div className="alert alert-danger" role="alert">
                {errors.map((e, i) => (<li key={i}>{e}</li>))}
            </div>) : ""
        return (
            <div className="text-center">
                <form className="form-signin" onSubmit={this.formSubmitHandler}>
                    <img className="mb-4" src={logo} alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Giriş Yapınız</h1>
                    <label className="sr-only">Email</label>
                    <input type="email" name="email" className="form-control" placeholder="Email" required autoFocus
                        onChange={this.inputChangeHandler} value={email} />
                    <label className="sr-only">Parola</label>
                    <input type="password" name="password" className="form-control" placeholder="Parola" required
                        onChange={this.inputChangeHandler} value={password} />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Giriş Yap</button>
                    <p>Hesabınız yok mu? Buradan <Link to="/register"> hesap oluşturun</Link></p>
                </form>
            </div>
        );
    }
}
export default Login;