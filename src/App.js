import './App.css'
import Navbar from './components/Navbar'
import Headings from './components/Heading'
import { Box, Flex } from '@chakra-ui/react'
import UserInvite from './components/UserInvite'
import UserList from './components/UserList'
import PendingInvites from './components/PendingInvites'
import PendingList from './components/PendingList'
import AllRoutes from './AllRoutes'

function App() {
  return (
    <div className='App'>
      {/* <Navbar />
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
      </Box> */}
      <AllRoutes />
    </div>
  )
}

export default App
