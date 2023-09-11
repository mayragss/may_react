
import '../assets/style/About.css'

export function Error() {
    return(
        <>
        <div className='about'>
            <picture>
                <source media="(max-width: 600px)" srcSet="404_480.png" />
                <source media="(max-width: 900px)" srcSet="404_854.png" />
                <source media="(max-width: 1700px)" srcSet="404_1366.png" />
                <img src="404_854.png" alt="Page not found" />
            </picture>
        </div>
    </>
    )
}