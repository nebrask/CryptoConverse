import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PaymentForm from './PaymentForm';

const Payment = () => {
  return (
    <div className='px-20'>
      <h1 className='text-3xl font-bold py-10'>Payment Details</h1>
      {false ? <Card>
        <CardHeader>
          <CardTitle>
            Bank
          </CardTitle>
          <CardDescription>
            Transit Number: 00123
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className='flex items-center'>
              <p className='w-40'>Account Holder</p>
              <p className='text-gray-400'>: Nebras Khan</p>
            </div>
            <div className='flex items-center'>
              <p className='w-40'>Account Number</p>
              <p className='text-gray-400'>: *****378</p>
            </div>
            <div className='flex items-center'>
              <p className='w-40'>Institution Number</p>
              <p className='text-gray-400'>: 010</p>
            </div>
        </CardContent>
      </Card> : <Dialog>
        <DialogTrigger>
          <Button className="py-6">Add Payment Details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>
          </DialogHeader>
          <PaymentForm/>
        </DialogContent>
      </Dialog>}
    </div>
  );
}

export default Payment;
