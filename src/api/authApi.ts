import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;


interface SignUpCredentials {
  email: string;
  password: string;
  name: string;
}

const signup = async (credentials: SignUpCredentials) => {
  try {
    const response = await axios.post(
      BASE_URL + "/api/auth/signup",
      credentials
    );
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const useSignUp = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success("SuccessFully SignUp");
      navigate("/email-verify");
    },
    onError: (error) => {
      toast.error(error.message || "Error while Signing In");
    },
  });

  return mutation;
};

const verifyEmail = async (code: String) => {
  try {
    const response = await axios.post(BASE_URL + "/api/auth/verify-email", {
      code: code,
    });

    return response;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const useVerifyEmail = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: verifyEmail,
    onSuccess: () => {
      toast.success("Successfully Verified");
      navigate("/user-profile");
    },
    onError: (error) => {
      toast.error(
        error.message || "Error occur while verifing verification Code"
      );
    },
  });

  return mutation;
};

interface LoginCredentials {
  email: string;
  password: string;
}

const login = async (credentials: LoginCredentials) => {
  try {
    const response = await axios.post(
      BASE_URL + "/api/auth/login",
      credentials,
      {
        withCredentials: true, // Include cookies in requests
      }
    );
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const useLogin = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("SuccessFully Login");
      navigate("/user-profile");
      window.location.reload(); 
    },
    onError: (error) => {
      console.log(error);

      toast.error(error.message || "Error while Logging In");
      console.log("error login");
    },
  });

  return mutation;
};

const logout = async () => {
  try {
    const response = await axios.post(BASE_URL + "/api/auth/logout");

    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const useLogout = () => {
  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("LogOut Successful");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return mutation;
};
