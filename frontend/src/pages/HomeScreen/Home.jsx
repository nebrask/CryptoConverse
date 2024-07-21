import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import React from 'react';
import AssetTable from './AssetTable';
import CryptoChart from './CryptoChart';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { DotIcon, MessageCircle } from 'lucide-react';
import { Cross1Icon } from '@radix-ui/react-icons';

const Home = () => {
  const [category, setCategory] = React.useState("all");
  const [inputValue, setInputValue] = React.useState("");
  const [isBotRelease, setIsBotRelease] = React.useState(false)

  const handleCategory = (value) => {
    setCategory(value);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleKeyPress=(event)=>{
    if(event.key=="Enter"){
      console.log(inputValue)
    }

    setInputValue("")
  }

  const handleBotRelease=()=>setIsBotRelease(!isBotRelease);

  return (
    <div className='relative left-0 top-0 w-full min-h-screen'>
      <div className='flex justify-start items-start w-full'>
        <div className='w-1/2 flex flex-col border-r'>
          <div className='pt-4 p-3 flex justify-start gap-4'>
            <Button onClick={() => handleCategory("all")} variant={category === "all" ? "default" : "outline"} className="rounded-full">All</Button>
            <Button onClick={() => handleCategory("top50")} variant={category === "top50" ? "default" : "outline"} className="rounded-full">Top 50</Button>
            <Button onClick={() => handleCategory("topGainers")} variant={category === "topGainers" ? "default" : "outline"} className="rounded-full">Top Gainers</Button>
            <Button onClick={() => handleCategory("topLosers")} variant={category === "topLosers" ? "default" : "outline"} className="rounded-full">Top Losers</Button>
          </div>
          <div className="mt-4">
            <AssetTable />
          </div>
        </div>
        <div className='w-1/2 p-5 pt-6'>
            <CryptoChart />
            <div className='flex gap-5 items-center'>
              <div className='w-12 h-12'>
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

        {isBotRelease && <div className='rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900'>
          <div className='flex justify-between items-center border-b px-6 h-[12%]'>
            <p>Chat Bot</p>
            <Button onClick={handleBotRelease} variant="ghost" size="icon">
              <Cross1Icon/> 
            </Button>
          </div>

          <div className='h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container'>
            <div className='self-start pb-5 w-auto'>
                <div className='justify-end self-end px-5 py-2 rounded empty bg-slate-800 w-auto'>
                  <p>Hi, Nebras</p>
                  <p>What questions do you have about cryptocurrency?</p>
                </div>
            </div>

            {
              [1,1,1,1].map((item, i)=> ( <div 
              key={i} 
              className={`${i%2==0?"self-start":"self-end"} "pb-5 w-auto"`}
              >
              {i%2==0? <div className='justify-end self-end px-5 py-2 rounded empty bg-slate-800 w-auto'>
                <p>prompt What is the top coin?</p>
              </div>: <div className='justify-end self-end px-5 py-2 rounded empty bg-slate-800 w-auto'>
                <p>The top coin is Bitcoin.</p>
              </div>}
              
          
              </div>
            ))}

          </div>
          <div className='h-[12%] border-t'>
            <Input 
            className="w-full h-full order-none outline-none" 
            placeholder="Message Crypto Bot" 
            onChange={handleChange}
            value={inputValue}
            onKeyPress={handleKeyPress}
            />
          </div>

        </div>}   

        <div className='relative w-[10rem] cursor-pointer group'>
          <Button onClick={handleBotRelease} className="w-full h-[3rem] gap-2 items-center">
            <MessageCircle size={30} className='fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a]'/>
            <span className='text-2xl'>Chat Bot</span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
