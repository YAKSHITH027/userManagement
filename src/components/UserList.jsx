import { Box, Button, Flex, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { users } from '../utils/users'
import Profile from './Profile'
import { RiDeleteBin6Line } from 'react-icons/ri'

const UserList = () => {
  return (
    <Box flexGrow={1} borderRadius={'md'} overflow={'hidden'}>
      <Flex py={'0.4rem'} px={'1rem'} bg={'gray.200'}>
        <Text width={'65%'}>Name</Text>
        <Text>Role</Text>
      </Flex>
      <Box>
        {users.map((user) => {
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
                <Select value={user.role}>
                  <option value={'designer'}>Desginer</option>
                  <option value={'engineer'}>Enginerr</option>
                </Select>
                <Button>
                  <RiDeleteBin6Line />
                </Button>
              </Flex>
            </Flex>
          )
        })}
      </Box>
    </Box>
  )
}

export default UserList
