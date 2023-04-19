import React, {useEffect,useState} from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'


const RideSelector = (props) => {

    const [ duration, setDuration ]= useState(0);



    const getDirections = (pickUpCoordinates, dropoffCoordinates) => {
        fetch(
            `https://api.mapbox.com/directions/v5/${pickUpCoordinates[0]},${pickUpCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiaWFtZWhyYW4iLCJhIjoiY2xnbTR2M2tvMDJieDNxb2w0MzJxbnV1ZCJ9.wVXOGmP5lN175kjd8V9y-A",
            })
        )
        .then((response)=>{
            return response.json();
        }).then(data => {
            // console.log
            setDuration(data.routes[0].duration/100)
        })
    }

    useEffect(()=>{
        if(props.pickUpCoordinates && props.dropoffCoordinates){
            getDirections(props.pickUpCoordinates, props.dropoffCoordinates)
        }

    }, [props.pickUpCoordinates, props.dropoffCoordinates])

  return (
    <Wrapper>
      <Title> Choose your Ride </Title>
      <CarList>
        {carList.map((car,index)=>(
            <Car key={index}>
            <CarImage src={car.imgUrl}/>
            <CarDetails>
                <Services> {car.service} </Services>
                <Time> 5 min Away </Time>
                </CarDetails>
                <Price>@{(duration/100*car.multiplier).toFixed(2)}</Price>
        </Car>

        ))}
        

      </CarList>
    </Wrapper>
  )
}

export default RideSelector

const Wrapper  = tw.div`
flex-1 overflow-y-scroll flex flex-col bg-white
`
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const CarList = tw.div`text-black overflow-y-scroll`
const Car = tw.div`flex p-4 items-center `
const CarDetails = tw.div`flex-1 px-3`
const Services = tw.div`font-medium`
const Time = tw.div`text-xs text-blue-500`
const Price = tw.div`text-sm`

const CarImage = tw.img`h-14 `
