import { Button } from '@/components/ui/button';
import React from 'react';
import AssetTable from './AssetTable';
import CryptoChart from './CryptoChart';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { DotIcon, MessageCircle } from 'lucide-react';

const Home = () => {
  const [category, setCategory] = React.useState("all");

  const handleCategory = (value) => {
    setCategory(value);
  };

  return (
    <div className='fixed left-0 top-0 w-full'>
      <div className='flex justify-start items-start w-full'>
        <div className='w-1/2 flex flex-col border-r pt-2'>
          <div className='pt-20 p-3 flex justify-start gap-4'>
            <Button onClick={() => handleCategory("all")} variant={category === "all" ? "default" : "outline"} className="rounded-full">All</Button>
            <Button onClick={() => handleCategory("top50")} variant={category === "top50" ? "default" : "outline"} className="rounded-full">Top 50</Button>
            <Button onClick={() => handleCategory("topGainers")} variant={category === "topGainers" ? "default" : "outline"} className="rounded-full">Top Gainers</Button>
            <Button onClick={() => handleCategory("topLosers")} variant={category === "topLosers" ? "default" : "outline"} className="rounded-full">Top Losers</Button>
          </div>
          <div className="mt-4">
            <AssetTable />
          </div>
        </div>
        <div className='w-1/2 p-5 pt-24'>
            <CryptoChart />
            <div className='flex gap-5 items-center'>
              <div className='w-12 h-12'> {/* Width and height classes to control the size */}
                <Avatar>
                  <AvatarImage src={"https://cryptologos.cc/logos/ethereum-eth-logo.png"} />
                </Avatar>
              </div>
              <div>
              <div className='flex items-center gap-2'>
                <p>ETH</p>
                <DotIcon className='text-gray-400'/>
                <p className='text-gray-400'>Ethereum</p>
              </div>
              <div className='flex items-end gap-2'>
                <p className='text-xl font-bold'>
                  8457
                </p>
                <p className='text-red-600'>
                  <span>-14356873.234</span>
                  <span>(-0.2342%)</span>
                </p>
              </div>
              </div>
            </div>
        </div>
      </div>
      <section className='absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2'>
        <div className='relative w-[10rem] cursor-pointer group'>
          <Button className="w-full h-[3rem] gap-2 items-center">
            <MessageCircle size={30} className='fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a]'/>
            <span className='text-2xl'>Chat Bot</span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;