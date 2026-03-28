import { mockGifs } from '../data/data';
import CustomHeader from "./CustomHeader"
import CustomSearch from "./CustomSearches"
import GifsList from "./GifsList"
import PreviousSearch from "./PreviousSearch"
import { useState } from 'react';


const GifsApp = () => {
  const [previousTerm, setPreviousTerm] = useState([''])

  const handleOnClicked = (term:string) => {
  }

  const handleSearch = (query:string) => {
    setPreviousTerm(state => [...state,query])
  }

 
  return (
    <>
    {/*Header*/}
     <CustomHeader title="Buscador de Gifs 2.0" 
      description="Vamos a divertirnos"/>
    
    {/*Buscardor*/}
     <CustomSearch onQuery={handleSearch} placeholder="Escribe una palabra"/>

    {/*Busquedas previas*/}
      <PreviousSearch onClicked={handleOnClicked} searches={previousTerm}/>


    {/*Gifs*/}
    <GifsList gifs={mockGifs}/>

    </>
  )
}

export default GifsApp
