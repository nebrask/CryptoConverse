import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { DotFilledIcon } from '@radix-ui/react-icons'

const AddMoneyForm = () => {
  const [amount, setAmount] = React.useState('')
  const [paymentMethod, setPaymentMethod] = React.useState("PAYPAL")

  const handlePaymentMethod = (value) => {
    setPaymentMethod(value)
  }

  const handleChange = (e) => {
    setAmount(e.target.value)
  }  

  const handleSubmit = (e) => {
    console.log(amount, paymentMethod);
  }

  return (
    <div className='pt-10 space-y-5'>
        <div>
            <h1 className='pb-1'>Enter Amount</h1>
            <Input onChange={handleChange} value={amount} className="py-7 text-lg" placeholder="$9999"/>
        </div>

        <div>
            <h1 className='pb-1'>Select Payment Method</h1>
            <RadioGroup onValueChange={(value)=>handlePaymentMethod(value)} className="flex" defaultValue="PAYPAL">
                <div className='flex items-center space-x-2 border p-3 px-5 rounded-md'>
                    <RadioGroupItem icon={DotFilledIcon} className="h-9 w-9" value="PAYPAL" id="r1"/>
                    <Label htmlFor="r1">
                        <div className='bg-white rounded-md px-5 py-2 w-32'>
                            <img className="h-8" src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15.fit_lim.size_1050x591.v1602794215.png" alt=""/>

                        </div>
                    </Label>
                </div>
                <div className='flex items-center space-x-2 border p-3 px-5 rounded-md'>
                    <RadioGroupItem icon={DotFilledIcon} className="h-9 w-9" value="STRIPE" id="r2"/>
                    <Label htmlFor="r2">
                        <div className='bg-white rounded-md px-5 py-2 w-32'>
                            <img className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGZVxQZ2UYa4aZMO1u_hgQPt-OVvqLq5MnoA&s" alt=""/>

                        </div>
                    </Label>
                </div>
            </RadioGroup>
        </div>
        <Button onClick={handleSubmit} className="w-full py-7">
            Submit
        </Button>
    </div>
  )
}

export default AddMoneyForm    