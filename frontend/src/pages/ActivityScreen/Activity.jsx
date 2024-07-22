import React from 'react'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const Activity = () => {
  return (
    <div className='p-2 lg:p-20'>
      <h1 className='font-bold text-3xl pb-5'>Activity</h1>
      <Table className="w-full border">
        <TableHeader>
          <TableRow>
            <TableHead className="text-left py-5">Date & Time</TableHead>
            <TableHead className="w-1/6 text-left">Trading Pair</TableHead>
            <TableHead className="w-1/6 text-left">Buy Price</TableHead>
            <TableHead className="w-1/6 text-left">Selling Price</TableHead>
            <TableHead className="w-1/6 text-left">Order Type</TableHead>
            <TableHead className="w-1/6 text-left">Profit/Loss</TableHead>
            <TableHead className="w-1/6 text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1,1,1,1,1,1,1,1,1,1].map((item, index)=> <TableRow key={index}>
            <TableCell className="w-1/6 text-left">
            <p>2024/07/22</p>
            <p className='text-gray-400'>11:49:23</p>
            </TableCell>
            <TableCell className="flex items-center gap-2 w-1/6">
              <Avatar>
                <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="Bitcoin" />
              </Avatar>
              <span>Bitcoin</span>
            </TableCell>
            <TableCell className="w-1/6 text-left">28653072551</TableCell>
            <TableCell className="w-1/6 text-left">1614919376383</TableCell>
            <TableCell className="w-1/6 text-left">2.37897</TableCell>
            <TableCell className="w-1/6 text-left">$81945</TableCell>
            <TableCell className="w-1/6 text-right">345</TableCell>
          </TableRow>)}
          
        </TableBody>
      </Table>  
    </div>
  )
}

export default Activity