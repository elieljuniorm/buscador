import {React,
        useState} from 'react'

import styles from './Container.module.css'

import {FaSearch} from "react-icons/fa";

function Container() {

    const [input, setInput] = useState('')

    function handleSearch(){
        alert('Valor do Input ' + input)
    }

  return (
    <div className={ styles.container }>
        <h1 className={ styles.title }>Buscador de CEP</h1>

        <div className={ styles.containerInput }>

            <input 
            type='text' 
            placeholder='Digite seu cep' 
            value={input}
            onChange = {(e/* evento */) => setInput(e.target.value)}/>

            <button className={ styles.buttonSearch } onClick={handleSearch}>
                <FaSearch/>
            </button>
        </div>

        <main className={ styles.main }>

            <h2>Cep: 66.120-370</h2>

            <span>Rua Severa Romana</span>
            <span>Entre São Sebastião e Alferes Costas</span>
            <span>Savramenta</span>
            <span>Belém - PA</span>

        </main>

    </div>
  )
}

export default Container