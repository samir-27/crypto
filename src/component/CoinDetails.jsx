import { Box, Text, Container, Image, HStack, Radio, RadioGroup, VStack, Step, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge, Progress } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { server } from "../index";
import axios from "axios";
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';

const CoinDetails = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const params = useParams();
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/${params.id}`
        );
        console.log(data);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;
  return (
    <div>
      <Container maxW={'container.xl'}>
        {
          loading ? <Loader /> : (
            <>
              <Box borderWidth={1} width={'full'} >
                dkasmdl
              </Box>

              {/* Button */}

              <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
                <HStack spacing={"4"}>
                  <Radio value={"inr"}>INR</Radio>
                  <Radio value={"usd"}>USD</Radio>
                  <Radio value={"eur"}>EUR</Radio>
                </HStack>
              </RadioGroup>

              <VStack spacing={'4'} padding={'16'} alignItems={'flex-start'}>
                <Text fontSize={'small'} alignSelf={'center'} opacity={'0.7'}>
                  Last Updateted on {Date(coin.market_data.last_updated).split("G")[0]}
                </Text>
                <Image src={coin.image.large} w={'16'} h={'16'} objectFit={'contain'}>

                </Image>
                <Stat>
                  <StatLabel>{coin.name}</StatLabel>
                  <StatNumber>
                    {currencySymbol}
                    {coin.market_data.current_price[currency]}
                  </StatNumber>
                  <StatHelpText>
                    <StatArrow
                      type={
                        coin.market_data.price_change_percentage_24h > 0
                          ? "increase"
                          : "decrease"
                      }
                    />
                    {coin.market_data.price_change_percentage_24h}%
                  </StatHelpText>
                </Stat>
                <Badge fontSize={'2xs'} bgColor={'blackAlpha.700'} color={'white'}>
                  {`#${coin.market_cap_rank}`}
                </Badge>
                <CustomBar high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin.market_data.low_24h[currency]}`} />
                <Box w={"full"} p="4">
                  <Item title={"Max Supply"} value={coin.market_data.max_supply} />
                  <Item
                    title={"Circulating Supply"}
                    value={coin.market_data.circulating_supply}
                  />
                  <Item
                    title={"Market Cap"}
                    value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
                  />
                  <Item
                    title={"All Time Low"}
                    value={`${currencySymbol}${coin.market_data.atl[currency]}`}
                  />
                  <Item
                    title={"All Time High"}
                    value={`${currencySymbol}${coin.market_data.ath[currency]}`}
                  />
                </Box>
              </VStack>

            </>
          )
        }
      </Container>
    </div>
  )
}
const CustomBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={50} colorScheme={"teal"} w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme={"red"} />
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme={"green"} />
    </HStack>
  </VStack>
);
const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);
export default CoinDetails
