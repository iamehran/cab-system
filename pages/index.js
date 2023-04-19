import {useEffect,useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import Link from 'next/link'

export default function Home() {

  const [pickup, setPickup ] = useState("");
  const [dropoff, setDropoff ] = useState("");

  console.log(pickup)
  console.log(dropoff)


  
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        
        <InputBoxes>
        <Input placeholder="Email" />
        <Input placeholder="Source" 
        value={pickup}
        onChange={(e)=> setPickup(e.target.value)}
        /> 
        <Input placeholder="Destination" 
        value={dropoff}
        onChange={(e)=> setDropoff(e.target.value)}
        />
        </InputBoxes>

        <Link href={{
        pathname: "/confirm",
        query: {
          pickup: pickup,
          dropoff: dropoff
        }
      }}>
        <ConfirmButtonContainer>
          Confirm Locations
        </ConfirmButtonContainer>
      </Link>

        </ActionItems>
        </Wrapper>
  )
}


const Wrapper = tw.div`
 flex flex-col flex-1 bg-gray-200 h-screen
`

const ActionItems =tw.div`
 flex-1 
`

const InputBoxes =tw.div`
flex flex-col flex-1 flex items-center mt-5 
`
const Input  =tw.input`
h-10 bg-wite my-2  p-2 text-black
`

const ConfirmButtonContainer  =tw.div`
bg-black text-white text-center mt-2 mx-10 py-4 text-2xl cursor-pointer
`