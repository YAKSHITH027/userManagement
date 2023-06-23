import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Profile = ({ user }) => {
  return (
    <Flex align={'center'} gap={'8px'} width={'65%'}>
      <Avatar name={user.name} size={'md'} />
      <Box>
        <Text fontSize={'15px'} fontWeight={'600'} mb='1px'>
          {user.name}
        </Text>
        <Text fontSize={'14px'} color={'gray.600'}>
          {user.email}
        </Text>
      </Box>
    </Flex>
  )
}

export default Profile
