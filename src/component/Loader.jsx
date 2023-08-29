import React from 'react'
import { VStack,Box,Spinner } from '@chakra-ui/react'
const Loader = () => {
  return (
    <div>
      <VStack h="90vh" justifyContent={"center"}>
        <Box transform={"scale(3)"}>
          <Spinner size={"xl"} />
        </Box>
      </VStack>
    </div>
  )
}

export default Loader
