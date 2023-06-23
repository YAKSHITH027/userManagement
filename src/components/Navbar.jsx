import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
const Navbar = () => {
  return (
    <Flex borderBottomWidth={'1px'} px={'1rem'} py='0.5rem'>
      <Flex gap={'1rem'}>
        <AiOutlineHome fontSize={'1.3rem'} />
        <Text>| Settings</Text>
        <Text>| Domains</Text>
      </Flex>
    </Flex>
  )
}

export default Navbar
