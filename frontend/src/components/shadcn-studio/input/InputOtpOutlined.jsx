import { useId } from 'react'

import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'

const InputOTPOutlined = () => {
  const id = useId()

  return (
    <div className='space-y-3 flex flex-col justify-center items-center'>
      <Label htmlFor={id}>Enter Your OTP</Label>
      <InputOTP id={id} maxLength={6}>
        <InputOTPGroup
          className='gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border'>
          <InputOTPSlot index={0} caretColor={"bg-platinum-600"}/>
          <InputOTPSlot index={1} caretColor={"bg-platinum-600"}/>
          <InputOTPSlot index={2} caretColor={"bg-platinum-600"}/>
          <InputOTPSlot index={3} caretColor={"bg-platinum-600"}/>
          <InputOTPSlot index={4} caretColor={"bg-platinum-600"}/>
          <InputOTPSlot index={5} caretColor={"bg-platinum-600"}/>
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}

export default InputOTPOutlined
