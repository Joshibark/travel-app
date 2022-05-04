import './main.css';

function Main() {
  const travelMethod = "Gå";
  let Distans = 0;
  let Emission = 0;

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
            <h2>Travel alternative: {travelMethod}</h2>
            <h2>Distans: {Distans}km</h2>
            <h2>Emission: {Emission} CO<sub>2</sub></h2>
          </div>

          <div className='Settings'>
              <h1>Settings</h1>
              {/* I settings istället??? */}
          </div>
      </div>
    );
  }
  export default Main;