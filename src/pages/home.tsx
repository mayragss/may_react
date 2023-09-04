import '../assets/style/Main.css'
import { useState } from 'react'

export function Home() {

  const [menu, setMenu] = useState(false);

  function openButtons() {

    setMenu(menu ? false : true);
  }

  return (
    <>
      <div className='tittle-container'>
        <p className='tittle glow'>Mayra</p>
        <p className='tittle-shadow'> Mayra</p>
        <p className='role'>SOFTWARE DEVELOPER</p>
      </div>
 


      < div>
        <img className='menu' onClick={openButtons} src='menu2.png' />
        {
          menu ?
            (
              <>
                <div className='option-1'>
                  <a className='option-about'> mayra </a>
                  <img className='menu-option-1' src='1.png' />
                </div>

                <div className='option-2'>
                  <a className='option-github'> github </a>
                  <img className='menu-option-2' src='2.png' />
                </div>                

                <div className='option-3'>
                  <a className='option-projects'> projects </a>
                  <img className='menu-option-3' src='3.png' />
                </div>


                <div className='option-4'>
                  <a className='option-budgets'> budgets </a>
                  <img className='menu-option-4' src='4.png' />
                </div>


                <div className='option-5'>
                  <a className='option-contacts'> contacts </a>
                  <img className='menu-option-5' src='5.png' />
                </div>

              </>
            )
            : <></>
        }
      </div>
    </>
  )
} 