interface Props {
  searches:string[],

  onClicked: (term:string) => void
}


const PreviousSearch = ({searches,onClicked}:Props) => {
  return (
    <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
              {
                searches.map((gif) => (
                  <li key={gif} onClick={() => onClicked(gif)}>{gif}</li>
                ))
              }
            </ul>
    </div>
  )
}

export default PreviousSearch
