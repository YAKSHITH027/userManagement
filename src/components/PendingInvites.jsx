import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
const PendingInvites = () => {
  return (
    <Box width={'25%'}>
      <Text fontWeight={'600'} mb='4px'>
        Pending Invites
      </Text>
      <Text mb='6px' textTransform={'capitalize'} fontSize={'14px'}>
        Manage the Status of the user account invitations that has been sent by
        the system
      </Text>
    </Box>
  )
}

export default PendingInvites
