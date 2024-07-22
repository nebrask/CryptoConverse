import React from 'react'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { BookmarkFilledIcon } from '@radix-ui/react-icons';

const Watchlist = () => {
  const handleRemoveToWatchlist=(value)=>{
    console.log(value)
  }
  
  return (
    <div className='p-2 lg:p-20'>
      <h1 className='font-bold text-3xl pb-5'>Watchlist</h1>
      <Table className="w-full border">
        <TableHeader>
          <TableRow>
            <TableHead className="text-left py-5">Coin</TableHead>
            <TableHead className="w-1/6 text-left">Symbol</TableHead>
            <TableHead className="w-1/6 text-left">Volume</TableHead>
            <TableHead className="w-1/6 text-left">Market Cap</TableHead>
            <TableHead className="w-1/6 text-left">24h</TableHead>
            <TableHead className="w-1/6 text-left">Price</TableHead>
            <TableHead className="w-1/6 text-red-600 text-right">Remove</TableHead>
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
            <TableCell className="w-1/6 text-left">$81945</TableCell>
            <TableCell className="w-1/6 text-right">
              <Button variant="ghost" onClick={()=>handleRemoveToWatchlist(item.id)} size="icon" className="h-10 w-10">
                <BookmarkFilledIcon className='w-6 h-6'/>
              </Button>
            </TableCell>
          </TableRow>)}
          
        </TableBody>
      </Table>  
    </div>
  )
}

export default Watchlist