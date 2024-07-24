  import { Badge } from '@/components/ui/badge'
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
  import { VerifiedIcon } from 'lucide-react'
  import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import React from 'react'
  import { Button } from '@/components/ui/button'
  import AccountVerificationForm from './AccountVerificationForm';

  const Profile = () => {
    const handleTwoFactorAuthentication=()=>{
      console.log("Two-Factor Authentication process initiated")
    }

    return (
      <div className='flex flex-col items-center mb-5'>
        <div className='pt-10 w-full lg:w-[60%]'>
          <Card>
            <CardHeader className="pb-9">
              <CardTitle>Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='lg:flex gap-32'>
                <div className='space-y-7'>
                  <div className='flex'>
                    <p className='w-[9rem]'>Email: </p>
                    <p className='text-gray-500'>test@gmail.com</p>
                  </div>
                  <div className='flex'>
                    <p className='w-[9rem]'>Full Name: </p>
                    <p className='text-gray-500'>Nebras Khan</p>
                  </div>
                  <div className='flex'>
                    <p className='w-[9rem]'>Date of Birth: </p>
                    <p className='text-gray-500'>04/11/1990</p>
                  </div>
                  <div className='flex'>
                    <p className='w-[9rem]'>Nationality: </p>
                    <p className='text-gray-500'>South Asian</p>
                  </div>
                </div>
                <div className='space-y-7'>
                  <div className='flex'>
                    <p className='w-[9rem]'>Email: </p>
                    <p className='text-gray-500'>test@gmail.com</p>
                  </div>
                  <div className='flex'>
                    <p className='w-[9rem]'>Full Name: </p>
                    <p className='text-gray-500'>Nebras Khan</p>
                  </div>
                  <div className='flex'>
                    <p className='w-[9rem]'>Date of Birth: </p>
                    <p className='text-gray-500'>04/11/1990</p>
                  </div>
                  <div className='flex'>
                    <p className='w-[9rem]'>Nationality: </p>
                    <p className='text-gray-500'>South Asian</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className='mt-6'>
            <Card className="w-full">
              <CardHeader className="pb-7">
                <div className='flex items-center gap-3'>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                  {false?<Badge className={"space-x-2 bg-green-600"}>
                    <VerifiedIcon/>
                    <span>
                      Enabled
                    </span>
                  </Badge>: <Badge className={"bg-red-500"}>Disabled</Badge>}
                </div>
              </CardHeader>
              <CardContent>
                <div>
                <Dialog>
                  <DialogTrigger>
                    <Button>
                    Enable Two-Factor Authentication
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Verify your account</DialogTitle>
                      <AccountVerificationForm handleSubmit={handleTwoFactorAuthentication}/>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  export default Profile