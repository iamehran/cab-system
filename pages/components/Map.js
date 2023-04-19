import {useEffect} from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'


// your token here
mapboxgl.accessToken = 'pk.eyJ1IjoiaWFtZWhyYW4iLCJhIjoiY2xnbTR2M2tvMDJieDNxb2w0MzJxbnV1ZCJ9.wVXOGmP5lN175kjd8V9y-A';


const Map = (props) => {

    useEffect(() => {
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
          center: [78.8718, 21.7679],
        zoom: 5,
      })
  
      if(props.pickupCoordinates){
        
        addToMap(map, props.pickupCoordinates)
      }
  
      if(props.dropoffCoordinates){
        addToMap(map, props.dropoffCoordinates)
      }
  
      if(props.pickupCoordinates && props.dropoffCoordinates){
       
        map.fitBounds([
          props.dropoffCoordinates,
          props.pickupCoordinates
        ], {
          padding: 60
        })
      }
  
    }, [props.pickupCoordinates, props.dropoffCoordinates])
  
    
    const addToMap = (map, coordinates) => {
      const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
    }

  
    return <Wrapper id='map'></Wrapper>
  }
  
  export default Map
  
  const Wrapper = tw.div`
  flex-1 h-1/2
  `