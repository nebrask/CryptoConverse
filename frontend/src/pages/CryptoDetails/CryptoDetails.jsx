import { AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Avatar } from '@radix-ui/react-avatar'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import { BookmarkIcon, DotIcon } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import TradingForm from './TradingForm';
import CryptoChart from '../HomeScreen/CryptoChart'


const CryptoDetails = () => {
  return (
    <div className='p-5 mt-5'>
      <div className='flex justify-between'>
        <div className='flex gap-5 items-center'>
          <div className='w-10 h-10'>
            <Avatar>
              <AvatarImage
              src={
                "https://cryptologos.cc/logos/ethereum-eth-logo.png"
                }
              />
            </Avatar>
          </div>
          <div>
            <div className='flex items-center gap-2'>
                <p>ETH</p>
                <DotIcon className='text-gray-400'/>
                <p className='text-gray-400'>Ethereum</p>
            </div>
            <div className='flex items-end gap-2'>
                <p className='text-xl font-bold'>$8457</p>
                <p className="text-red-600">
                  <span>-14356873.234</span>
                  <span>(-0.2342%)</span>
                </p>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <Button>
            {true?<BookmarkFilledIcon className='h-6 w-6'/>:<BookmarkIcon className='h-6 w-6'/>}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button size="lg">
                Trade
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Specify Investment Amount</DialogTitle>
              </DialogHeader>
              <TradingForm/>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className='mt-20'>
        <CryptoChart/>
      </div>
    </div>
  )
}

export default CryptoDetails