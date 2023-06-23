import { Box, Button, Flex, Select, Text } from '@chakra-ui/react'
import React from 'react'

import Profile from './Profile'
import { pendingUsers } from '../utils/pendingUsers'

const PendingList = () => {
  return (
    <Box flexGrow={1} borderRadius={'md'} overflow={'hidden'}>
      <Flex py={'0.4rem'} px={'1rem'} bg={'gray.200'}>
        <Text width={'65%'}>Name</Text>
      </Flex>
      <Box>
        {pendingUsers.map((user) => {
          return (
            <Flex
              key={user.id}
              px={'0.5rem'}
              py={'0.4rem'}
              borderBottomWidth={'1px'}
              alignItems={'center'}
            >
              <Profile user={user} />
              <Flex flexGrow={1} gap={'2rem'} pr={'1rem'}>
                <Button>Resend Invite</Button>
                <Button color={'red'} border={'0.5px solid red'}>
                  Revoke Invite
                </Button>
              </Flex>
            </Flex>
          )
        })}
      </Box>
    </Box>
  )
}

export default PendingList
