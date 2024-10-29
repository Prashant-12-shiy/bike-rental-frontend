import { useForm } from "react-hook-form";
import { useSignUp } from "@/api/authApi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SignUpCredentials {
  email: string;
  password: string;
  name: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpCredentials>();

  const { mutate: SignupMutation } = useSignUp();

  const onsubmit = (data: SignUpCredentials) => {
    SignupMutation(data);
  };

  return (
    <div className=" my-10">
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="*:mb-3 w-[60%] m-auto max-md:w-full"
      >
        <h2 className="text-4xl font-semibold pb-3">SignUp Form</h2>
        <div>
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            max={40}
            {...register("name", { required: "Name is Required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
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
            max={15}
            {...register("password", { required: "Password is Required" })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <Button className="mt-3 bg-red-500 hover:bg-red-700" type="submit">
          Signup
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
