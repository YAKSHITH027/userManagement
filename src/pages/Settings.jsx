import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Flex } from '@chakra-ui/react'
import Headings from '../components/Heading'
import UserInvite from '../components/UserInvite'
import UserList from '../components/UserList'
import PendingInvites from '../components/PendingInvites'
import PendingList from '../components/PendingList'

const Settings = () => {
  return (
    <div>
      <Navbar />
      <Box px={'5rem'} mt='2rem'>
        <Headings />
        <Flex gap={'1rem'} pb={'3rem'} borderBottomWidth={'1px'}>
          <UserInvite />
          <UserList />
        </Flex>

        <Flex mt={'2rem'} gap={'1rem'} pb={'3rem'} borderBottomWidth={'1px'}>
          <PendingInvites />
          <PendingList />
        </Flex>
      </Box>
    </div>
  )
}

export default Settings
