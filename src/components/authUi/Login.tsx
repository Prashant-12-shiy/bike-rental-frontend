// import { useForm } from "react-hook-form";
// import { Input } from "../ui/input";
// import { useLogin } from "@/api/authApi";
// import { Button } from "../ui/button";
// import { DialogClose } from "../ui/dialog";
// interface LoginCredentials {
//   email: string;
//   password: string;
// }

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginCredentials>();

//   const { mutate: LoginMutation } = useLogin();

//   const onsubmit = (data: LoginCredentials) => {
//     LoginMutation(data);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onsubmit)} className="*:mb-3">
//         <div>
//           <label htmlFor="email">Email</label>
//           <Input
//             type="text"
//             {...register("email", { required: "Email is Required" })}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <Input
//             type="password"
//             {...register("password", { required: "Password is Required" })}
//           />
//           {errors.password && (
//             <p className="text-red-500">{errors.password.message}</p>
//           )}
//         </div>
//         <Button className="mt-3 bg-red-500 hover:bg-red-700" type="submit">
//           Login
//         </Button>
//         <DialogClose asChild>
//           <Button type="button" variant="secondary" className="ml-5">
//             Close
//           </Button>
//         </DialogClose>
//       </form>
//     </div>
//   );
// };

// export default Login;
