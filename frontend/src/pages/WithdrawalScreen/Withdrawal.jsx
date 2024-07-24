import React from 'react'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const Withdrawal = () => {
  return (
    <div className='p-2 lg:p-20'>
      <h1 className='font-bold text-3xl pb-5'>Withdrawal</h1>
      <Table className="w-full border">
        <TableHeader>
          <TableRow>
            <TableHead className="text-left py-5">Date</TableHead>
            <TableHead className="w-1/6 text-left">Method</TableHead>
            <TableHead className="w-1/6 text-left">Amount</TableHead>
            <TableHead className="w-1/6 text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1,1,1,1,1,1,1,1,1,1].map((item, index)=> <TableRow key={index}>
            <TableCell className="w-1/6 text-left">
            <p>July 24, 2024 at 10:02</p>
            </TableCell>
            <TableCell className="w-1/6 text-left">Bank</TableCell>
            <TableCell className="w-1/6 text-left">$81945</TableCell>
            <TableCell className="w-1/6 text-right">Success</TableCell>
          </TableRow>)}
          
        </TableBody>
      </Table>  
    </div>
  )
}

export default Withdrawal