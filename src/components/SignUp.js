import { Link } from "react-router-dom";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    console.log(errors.phone);
  }, [errors]);
  const submit = (data) => {
    console.log(data);
  };
  return (
    <div className="body">
      <div className="container">
        <div className="row justify-content-center">
          <div className="inner-wrap col-xl-7">
            <div className="header">
              <h1>Register</h1>
            </div>
            <div className="data">
              <form className="" onSubmit={handleSubmit(submit)}>
              <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    id="name"
                    name="name"
                    {...register("Name", {
                      required: "Name không được để trống",

                    })}
                  />
                    {errors.name && (
                    <p className="text-danger">{errors.name.message}</p>
                  )}

                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="form-control"
                    // id="phone"
                    maxLength="11"
                    name="phone_number"
                    {...register("phone", {
                      required: true,
                      pattern: {
                        value: /("+"84|84|0)+([3|5|7|8|9])+([0-9]{8})\b/,

                        message: "Không đúng đinh dạng",
                      },
                      minLength: {
                        value: 10,
                        message: "Tối thiểu 10 số",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="text-danger">{errors.phone.message}</p>
                  )}
                </div>
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
                    placeholder="New Password"
                    className="form-control"
                    id="password"
                    name="password"
                    {...register("password", {
                      required: "Mật khẩu không được để trống",

                      minLength: { value: 6, message: "Tối thiểu 6 kí tự" },
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
                  <input
                    type="password"
                    placeholder="New Password Again"
                    className="form-control"
                    id="confirm-password"
                    {...register("confirmPassword", {
                      required: "Nhập lại mật khẩu không được để trống",

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
                  {errors.confirmPassword && (
                    <p className="text-danger">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <button className="btn form-control btn-success">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            <div className="sign-in">
              <Link to="/login">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
