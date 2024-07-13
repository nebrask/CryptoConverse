import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import icon from '../../assets/icon.png'
import SideBar from './SideBar'

const NavBar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 px-2 py-3 border-b z-50 bg-background bg-opacity-0 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
            <Sheet>
                <SheetTrigger>
                    <Button variant='ghost' size='icon' className="rounded-full">
                        <DragHandleHorizontalIcon className='h-6 w-6'/>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-72">
                    <SheetHeader>
                        <SheetTitle>
                            <div className='text-xl flex items-center justify-center' style={{ paddingTop: '20px' }}>
                                <Avatar className='mr-2'>
                                    <AvatarImage src={icon} alt="Icon"/>
                                </Avatar>
                                <span className="font-bold text-white">CryptoConverse</span>
                            </div>
                        </SheetTitle>
                    </SheetHeader>
                    <SideBar/>
                </SheetContent>
            </Sheet>
        </div>
        <p className='text-sm lg:text-base cursor-pointer'>
            CryptoConverse
        </p>
        <div className='flex-grow flex items-center justify-center'>
            <Button variant="outline" className="flex items-center gap-3 py-2 px-4 rounded-lg">
                <MagnifyingGlassIcon className="w-5 h-5"/>
                <span>Search</span>
            </Button>
        </div>
        <div className='flex items-center gap-2'>
            <Avatar>
                <AvatarFallback delayMs={600}>
                    N
                </AvatarFallback>
            </Avatar>
        </div>
    </div>
  )
}

export default NavBar
