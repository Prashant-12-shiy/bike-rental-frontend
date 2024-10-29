import { useForm } from "react-hook-form";
import UserImage from "../assets/user-profile.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useGetUserData, useUpdateUserDetails } from "@/api/userApi";
import { useEffect } from "react";

interface FormData {
  email: String;
  name: String;
  address: String;
  country: String;
  city: String;
}

const UserProfile = () => {
  const { data } = useGetUserData();
  const { mutate: updateUserDetailsMutation } = useUpdateUserDetails();
  const { register, handleSubmit, setValue } = useForm<FormData>();

  useEffect(() => {
    if (data?.email) {
      setValue("email", data.email); // Only set value if data.email is available
    }
  }, [data, setValue]);

  const onsubmit = (data: FormData) => {
    console.log(data);

    updateUserDetailsMutation(data);
  };

  return (
    <div className="flex justify-around mt-10">
      <div>
        <img src={UserImage} alt="user-image" />
      </div>
      <div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <h2 className="text-2xl font-semibold text-red-500 mb-5">
            Prashant Thapa
          </h2>
          <div className="mb-5">
            <label htmlFor="email">Email</label>
            <Input {...register("email")} disabled />
          </div>

          <div className="flex gap-7 mb-5">
            <div>
              <label htmlFor="name">Name</label>
              <Input placeholder={data?.name} {...register("name")} />
            </div>

            <div>
              <label htmlFor="address">Address</label>
              <Input placeholder={data?.address} {...register("address")} />
            </div>
          </div>

          <div className="flex gap-7 mb-5">
            <div>
              <label htmlFor="country">Country</label>
              <Input placeholder={data?.country} {...register("country")} />
            </div>

            <div>
              <label htmlFor="city">City</label>
              <Input placeholder={data?.city} {...register("city")} />
            </div>
          </div>

          <Button className="bg-red-500 hover:bg-red-700">Change</Button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
