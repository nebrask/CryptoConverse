import React from 'react'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const Portfolio = () => {
  return (
    <div className='p-2 lg:p-20'>
      <h1 className='font-bold text-3xl pb-5'>Portfolio</h1>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/6 text-left">Asset</TableHead>
            <TableHead className="w-1/6 text-left">Price</TableHead>
            <TableHead className="w-1/6 text-left">Unit</TableHead>
            <TableHead className="w-1/6 text-left">Change</TableHead>
            <TableHead className="w-1/6 text-left">Change %</TableHead>
            <TableHead className="w-1/6 text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1,1,1,1,1,1,1,1,1,1].map((item, index)=> <TableRow key={index}>
            <TableCell className="flex items-center gap-2 w-1/6">
              <Avatar>
                <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="Bitcoin" />
              </Avatar>
              <span>Bitcoin</span>
            </TableCell>
            <TableCell className="w-1/6 text-left">BTC</TableCell>
            <TableCell className="w-1/6 text-left">28653072551</TableCell>
            <TableCell className="w-1/6 text-left">1614919376383</TableCell>
            <TableCell className="w-1/6 text-left">2.37897</TableCell>
            <TableCell className="w-1/6 text-right">$81945</TableCell>
          </TableRow>)}
          
        </TableBody>
      </Table>  
    </div>
  )
}

export default Portfolio