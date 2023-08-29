import React from 'react'
import { VStack, Image, Text, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const CoinCard = ({ id, name, price, img, symbol,currencySymbol= "₹" }) => (
<Link to={`/coin/${id}`}>

    <VStack w={'52'} shadow={'lg'} padding={'8'} borderRadius={'lg'} transform={"all 0.5"}
        m={4} css={{
            "&:hover": {
                transform: "scale(1.1)"
            }
        }}>
        <Image src={img} w={'10'} h={'10'} objectFit={'contain'} alt='exchainge' />
        <Heading size={'md'} noOfLines={'0'}>{symbol}</Heading>
        <Heading size={'md'} noOfLines={'0'}>{price ? `${currencySymbol} ${price}`:"NA"}</Heading>
        <Text noOfLines={1}>{name}</Text>
    </VStack>
</Link>
)

export default CoinCard
