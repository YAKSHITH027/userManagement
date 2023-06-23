import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ children }) => {
  return (
    <Flex>
      <Box width={'15%'} px={'1rem'} py='1rem' borderRightWidth={'2px'}>
        <Heading mb={'2rem'}>Settings</Heading>
        <Flex flexDir={'column'} gap={'5px'}>
          {/* <Link>
         </Link> */}
          <Text>Personal Inforamtion</Text>
          <Text>Billing Inforamtion</Text>
          <Text>Domains</Text>
          <Text>User Management</Text>
        </Flex>
      </Box>
      <Box>{children}</Box>
    </Flex>
  )
}

export default Sidebar
