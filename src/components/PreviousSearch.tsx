interface Props {
  searches:string[]
}


const PreviousSearch = ({searches}:Props) => {
  return (
    <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
              {
                searches.map((gif) => (
                  <li key={gif}>{gif}</li>
                ))
              }
            </ul>
    </div>
  )
}

export default PreviousSearch
