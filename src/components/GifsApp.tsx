import { mockGifs } from '../data/data';
import CustomHeader from "./CustomHeader"
import CustomSearch from "./CustomSearches"
import GifsList from "./GifsList"
import PreviousSearch from "./PreviousSearch"


const GifsApp = () => {
  return (
    <>
    {/*Header*/}
     <CustomHeader title="Buscador de Gifs 2.0" 
      description="Vamos a divertirnos"/>
    
    {/*Buscardor*/}
     <CustomSearch placeholder="Escribe una palabra"/>

    {/*Busquedas previas*/}
    <PreviousSearch searches={['Batman','SpiderMan','Deadpool']}/>

    {/*Gifs*/}
    <GifsList gifs={mockGifs}/>

    </>
  )
}

export default GifsApp
