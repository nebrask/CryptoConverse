import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";

const SignIn = () => {
  const form = useForm({
    defaultValues: {
        email: "",
        password: "",
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
    <div>
        <h1 className='text-xl font-bold pb-3 text-center'>Login</h1>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                         <FormItem>
                            <FormControl>
                                <Input className="border w-full border-gray-700 py-2" placeholder="Enter Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                         <FormItem>
                            <FormControl>
                                <Input className="border w-full border-gray-700 py-2" placeholder="Enter Password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                    <Button type="submit" className="w-full py-2">
                        Submit
                    </Button>
            </form>
        </Form>
    </div>
  );
}

export default SignIn;
