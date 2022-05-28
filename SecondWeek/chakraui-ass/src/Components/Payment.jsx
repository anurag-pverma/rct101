import React from 'react'
import { Input, Stack, color } from '@chakra-ui/react'

export default function Payment() {
  return (
    


  <Stack spacing={4}>
  <Input variant='flushed' 
   isInvalid
   errorBorderColor='red.300'
  
  placeholder='John Smith' />
  <Input variant='flushed'
  isInvalid
  errorBorderColor='red.300'
   placeholder='4256  7890 5678 4532' />
  
  </Stack>


    
  )
}
