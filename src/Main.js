import './main.css';

function Main() {
    return (
      <div className="Main">
          <h1>Travel companion</h1>

          <div className="map">
            <h1>map</h1>
          </div>

            <div className='search-bar'>
                <input className='search' type="text" placeholder='Enter position...'/>
                <input className='search' type="text" placeholder='Enter destination...'/>
            </div>

          <div className='travel-alternative'>
            <p>travel alternative dropdown</p>
            {/* dropdown eller flera alternativ som i jlt appen??? */}
          </div>

          <div className='text'>
              {/* Dropdown details */}
            <h2>Travel alternative: Gå</h2>
            <h2>Distans: 0km</h2>
            <h2>Emission: 0 CO<sub>2</sub></h2>p
          </div>

          <div className='Language'>
              <h1>Swedish/English</h1>
              {/* I settings istället??? */}
          </div>
      </div>
    );
  }
  
  export default Main;