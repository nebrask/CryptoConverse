import React, { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from '@/components/ui/button';

const AccountVerificationForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    console.log(value);
  };

  return (
    <div className='flex justify-center'>
      <div className='space-y-5 mt-10 w-full'>
        <div className='flex justify-between items-center'>
            <p>Email: test@gmail.com</p>
            <Dialog>
                <DialogTrigger as="div">
                <Button type="button">Send OTP</Button>
                </DialogTrigger>
                <DialogContent>
                <DialogHeader>
                    <DialogTitle>Enter OTP</DialogTitle>
                </DialogHeader>
                <div className='py-5 flex gap-10 justify-center items-center'>
                    <InputOTP onChange={setValue} value={value} maxLength={6}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                    </InputOTP>
                    <DialogClose>
                    <Button type="button" onClick={handleSubmit} className="w-[10rem]">
                        Submit
                    </Button>
                    </DialogClose>
                </div>
                </DialogContent>
            </Dialog>
        </div>
      </div>
    </div>
  );
};

export default AccountVerificationForm;
