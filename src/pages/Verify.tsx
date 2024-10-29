import { useVerifyEmail } from "@/api/authApi";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useState } from "react";

const Verify = () => {
  const [value, setValue] = useState("");
  const { mutate: VerifyEmailMutation } = useVerifyEmail();

  const handleSubmitEmailVerification = () => {
    const code = value;
    VerifyEmailMutation(code );
  };

  return (
    <div className="w-[60%] max-md:w-full m-auto h-[250px] border text-center flex flex-col justify-center items-center gap-10 my-16 rounded-lg border-black py-10">
      <h2> Enter Verification Code</h2>
      <InputOTP
        maxLength={7}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
          <InputOTPSlot index={6} />
        </InputOTPGroup>
      </InputOTP>

      <Button
        onClick={() => handleSubmitEmailVerification()}
        className="bg-red-500 px-7 "
      >
        Verify
      </Button>
    </div>
  );
};

export default Verify;
