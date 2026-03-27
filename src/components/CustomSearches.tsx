interface Props {
  placeholder?:string
}


const CustomSearches = ({placeholder = 'Buscar'}:Props) => {
  return (
    <div className="search-container">
        <input type="text" placeholder={placeholder}/>
        <button>Buscar</button>
    </div>
  )
}

export default CustomSearches
