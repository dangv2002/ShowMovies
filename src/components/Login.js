import { Link } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="body">
      <div className="container">
        <div className="row justify-content-center">
          <div className="inner-wrap col">
            <div className="header">
              <h1>Login</h1>
            </div>
            <div className="data w-100">
              <form
                id="form"
                className="form"
                onSubmit={handleSubmit((data) => console.log(data))}
              >
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                    id="email"
                    name="email"
                    {...register("email", {
                      required: "Email không được để trống",

                      pattern: {
                        value: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,

                        message: "Không đúng định dạng",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    id="password"
                    name="password"
                    {...register("password", {
                      required: "mật khẩu không được để trống",

                      minLength: {
                        value: 6,
                        message: "Tối thiểu 6 kí tự",
                      },
                      maxLength: {
                        value: 20,
                        message: "Tối đa 20 kí tự",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-danger">{errors.password.message}</p>
                  )}
                </div>
                <div className="form-group">
                  <button className="btn form-control btn-success">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="sign-up">
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;