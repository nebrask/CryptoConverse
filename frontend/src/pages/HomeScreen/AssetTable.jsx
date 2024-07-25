import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';

const AssetTable = () => {
  const navigate=useNavigate();
  
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/6 text-left">Coin</TableHead>
          <TableHead className="w-1/6 text-left">Symbol</TableHead>
          <TableHead className="w-1/6 text-left">Volume</TableHead>
          <TableHead className="w-1/6 text-left">Market Cap</TableHead>
          <TableHead className="w-1/6 text-left">24h</TableHead>
          <TableHead className="w-1/6 text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1,1,1,1,1,1,1,1,1,1].map((item, index)=> <TableRow key={index}>
          <TableCell onClick={()=>navigate('/market/bitcoin/')} className="flex items-center gap-2 w-1/6">
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
  )
}

export default AssetTable;
