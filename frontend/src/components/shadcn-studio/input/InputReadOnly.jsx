import { useId } from 'react'

import { Input } from '@/components/ui/input'

const InputReadOnly = ( { defaultValue, className } ) => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Input
        id={id}
        type='email'
        placeholder='Email address'
        defaultValue={defaultValue}
        className={className}
        readOnly />
    </div>
  );
}

export default InputReadOnly
