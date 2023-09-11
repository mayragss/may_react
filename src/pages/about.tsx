
import '../assets/style/About.css'

export function About() {
    return(
        <>
        <div className='about'>
            <picture>
                <source media="(max-width: 600px)" srcSet="about_480.png" />
                <source media="(max-width: 900px)" srcSet="about_854.png" />
                <source media="(max-width: 1700px)" srcSet="about_1366.png" />
                <img src="about_854.png" alt="Resume about Mayra Gomes" />
            </picture>
        </div>
    </>
    )
}