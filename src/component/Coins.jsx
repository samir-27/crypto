import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Button, Container, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import Loader from './Loader'
import ErrorComponent from './ErrorComponent'
import CoinCard from './CoinCard'
const Coins = () => {
  const [coins, setCoins] = useState({});
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState('inr')


  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        console.log(data)
        setCoins(data)
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoin();
  }, []);
  if (error) return <ErrorComponent message={"Error While fatching Exchainges "} />

  return (
    <div>
      <Container maxW={'container.xl'}>

        {loading ? <Loader /> : <>

          <HStack wrap={'wrap'}>
            {
              coins.map((i) => (
                <CoinCard id={i.id} key={i.id} name={i.name} price={i.price_change_24h} currencySymbol={currencySymbol} symbol={i.symbol} img={i.image} />
              ))
            }
          </HStack>

          <HStack>
            <Button onClick={()=>changePage(2)}>2</Button>
          </HStack>
        </>}
      </Container>
    </div>
  )
}



export default Coins
