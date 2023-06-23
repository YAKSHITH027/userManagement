import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const UserInvite = () => {
  return (
    <Box width={'25%'}>
      <Text fontWeight={'600'} mb='4px'>
        Users
      </Text>
      <Text mb='6px' textTransform={'capitalize'}>
        Add or remove Users and manage their roles and permissions
      </Text>
      <Button colorScheme='purple'>Invite People</Button>
    </Box>
  )
}

export default UserInvite
