import React from 'react';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

const PaymentForm = () => {
  const form = useForm({
    defaultValues: {
        accountHolderName: "",
        transitNumber: "",
        institutionNumber: "",
        accountNumber: "",
        confirmAccountNumber: "",
        bankName: ""
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    if (data.accountNumber !== data.confirmAccountNumber) {
      alert("Account numbers do not match.");
      return;
    }
  };

  return (
    <div className='px-10 py-2'>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <FormField
                    control={form.control}
                    name="accountHolderName"
                    render={({ field }) => (
                         <FormItem>
                            <FormLabel>Account Holder Name</FormLabel>
                            <FormControl>
                                <Input className="border w-full border-gray-700 py-2" placeholder="Enter Account Holder Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="transitNumber"
                    render={({ field }) => (
                         <FormItem>
                            <FormLabel>Transit Number</FormLabel>
                            <FormControl>
                                <Input className="border w-full border-gray-700 py-2" placeholder="Enter Transit Number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="institutionNumber"
                    render={({ field }) => (
                         <FormItem>
                            <FormLabel>Institution Number</FormLabel>
                            <FormControl>
                                <Input className="border w-full border-gray-700 py-2" placeholder="Enter Institution Number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="accountNumber"
                    render={({ field }) => (
                         <FormItem>
                            <FormLabel>Account Number</FormLabel>
                            <FormControl>
                                <Input className="border w-full border-gray-700 py-2" placeholder="Enter Account Number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmAccountNumber"
                    render={({ field }) => (
                         <FormItem>
                            <FormLabel>Confirm Account Number</FormLabel>
                            <FormControl>
                                <Input className="border w-full border-gray-700 py-2" placeholder="Confirm Account Number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="bankName"
                    render={({ field }) => (
                         <FormItem>
                            <FormLabel>Bank Name</FormLabel>
                            <FormControl>
                                <Input className="border w-full border-gray-700 py-2" placeholder="Enter Bank Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <DialogClose className="w-full">
                    <Button type="submit" className="w-full py-2">
                        Submit
                    </Button>
                </DialogClose>
            </form>
        </Form>
    </div>
  );
}

export default PaymentForm;
