
import '../assets/style/Works.css'

export function Work() {
    return (

        <>
        <div className='works'>
            <h1 className="h1">SOME WORKS</h1>
        </div>

        <br />

        <div className='row card-row'>
            <div className='col-md-6 website-card'>
                <img className='website' src='websites/bancoxp.png' />
            </div>
            <div className='col-md-6 website-card'>
                <img className='website' src='websites/obraprimata.png' />
            </div>
        </div>

        <div className='row card-row'>
            <div className='col-md-6 website-card'>
                <img className='website' src='websites/grupofda.png' />
            </div>
            <div className='col-md-6 website-card'>
                <img className='website' src='websites/turbi.png' />
            </div>
        </div>

        <div className='row card-row'>
            <div className='col-md-6 website-card'>
                <img className='website' src='websites/paginascoloridas.png' />
            </div>
            <div className='col-md-6 website-card'>
                <img className='website' src='websites/pertode.png' />
            </div>
        </div>

        <div className='row card-row'>
            <div className='col-md-6 website-card'>
                <img className='website' src='websites/bichomaps.png' />
            </div>
            <div className='col-md-6 website-card'>
                <img className='website' src='websites/eredeitau.png' />
            </div>
        </div>


    </>
    );    
}
