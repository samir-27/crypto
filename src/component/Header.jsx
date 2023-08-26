import { Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <div>
        <HStack p={'4'} shadow={'base'} bgColor={'blackAlpha.900'}>
                <Button variant={'unstyled'} color={'white'}>
                    <Link to={'/'}>Home</Link>
                </Button>
                <Button variant={'unstyled'} color={'white'}>
                    <Link to={'/exchainges'}>Exchainges</Link>
                </Button>
                <Button variant={'unstyled'} color={'white'}>
                    <Link to={'/coins'}>Coins</Link>
                </Button>
        </HStack>
    </div>
  )
}

export default Header
