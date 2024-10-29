import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/api/authApi";
import { useAuth } from "@/hooks/useAuth";


interface LoginCredentials {
  email: string;
  password: string;
}

const Login = () => {
  const {setIsAuthenticated} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>();

  const { mutate: LoginMutation } = useLogin();

  const onsubmit = (data: LoginCredentials) => {
    LoginMutation(data, {
      onSuccess: () => {
        setIsAuthenticated(true);
        
      }
    });
  };

  

  return (
    <div className="my-10 ">
      <form onSubmit={handleSubmit(onsubmit)} className="*:mb-3 w-[60%] m-auto max-md:w-full">
        <h2 className="text-4xl font-semibold pb-4">Login Form</h2>
        <div>
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            {...register("email", { required: "Email is Required" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            {...register("password", { required: "Password is Required" })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <Button className="mt-3 bg-red-500 hover:bg-red-700" type="submit">
          Login
        </Button>
    
      </form>
    </div>
  );
};

export default Login;
