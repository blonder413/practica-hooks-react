import { useForm } from "../hooks/useForm";

export const FormularioComponent = () => {
    const initialForm = {
        username: "",
        email: "",
        password: "",
    };
    const { username, email, password, onInputChange } = useForm(initialForm);
    
    const onSubmit = (event) => {
        event.preventDefault();
        console.log({"username": username, "email": email, "password": password});
    };
    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                    Username
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    aria-describedby="usernameHelp"
                    value={username}
                    onChange={onInputChange}
                />
                <div id="usernameHelp" className="form-text">
                    Username.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={onInputChange}
                />
                <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                ></input>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};
