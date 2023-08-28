import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import Loader from './Loader'
import ErrorComponent from './ErrorComponent'
const Exchanges = () => {
  const [exchanges, setExchanges] = useState({});
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    const fetchExchanges = async () => {
        try {
          const { data } = await axios.get(`${server}/exchanges`)
          setExchanges(data)
          setLoading(false);
        } catch (error) {
          setError(true);
          setLoading(false);  
        }
    };

    fetchExchanges();
  }, []);
if(error) return <ErrorComponent message={"Error While fatching Exchainges "} />
 
  return (
    <div>
      <Container maxW={'container.xl'}>

        {loading ? <Loader /> : <>

          <HStack wrap={'wrap'}>
            {
              exchanges.map((i) => (
                <ExchangCard key={i.id} name={i.name} rank={i.trust_score_rank} img={i.image} url={i.url} />
              ))
            }
          </HStack>
        </>}
      </Container>
    </div>
  )
}

const ExchangCard = ({ name, rank, img, url }) => (<a href={url} target='blank'>

  <VStack w={'52'} shadow={'lg'} padding={'8'} borderRadius={'lg'} transform={"all 0.5"}
    m={4} css={{
      "&:hover": {
        transform: "scale(1.1)"
      }
    }}>
    <Image src={img} w={'10'} h={'10'} objectFit={'contain'} alt='exchainge' />
    <Heading size={'md'} noOfLines={'10'}>{rank}</Heading>
    <Text noOfLines={1}>{name}</Text>
  </VStack>
</a>
)


export default Exchanges
