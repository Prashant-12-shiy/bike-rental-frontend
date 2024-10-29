import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "sonner";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const getUserData = async () => {
    const email = Cookies.get("email");
    console.log(email);
    
     try {
        const response = await axios.post(BASE_URL + "/user/get-user", {email: email});

        return response.data.user;
    } catch (error: any) {
        console.log(error);
        throw error?.response?.data
    }
}

export const useGetUserData = () => {
    return useQuery({
        queryKey: ["getUser"],
        queryFn: getUserData,
    })
}

const updateUserDetails = async (data: any) => {
    try {
        const response = await axios.post(BASE_URL + "/user/update-user", data);

        return response.data;

    } catch (error:any) {
        console.log(error);
        throw error?.response?.data
    }
}

export const useUpdateUserDetails = () => {
    const mutation = useMutation({
        mutationFn: updateUserDetails,
        onSuccess: () => {
            toast.success("User Details Updated")
        },
        onError: (error) => {
            toast.error(error?.message)
        }
    })

    return mutation
}