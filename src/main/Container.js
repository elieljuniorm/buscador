import {React,
        useState} from 'react'

import styles from './Container.module.css'

import {FaSearch} from "react-icons/fa";

import api from '../services/api';

function Container() {

    const [input, setInput] = useState('')

    const [cep, setCep] = useState({})

    async function handleSearch(){

        if(input === ''){
            alert('Preencha algum CEP')
            return
        }
        
        try{

            const response = await api.get(`${input}/json`);
            setCep(response.data);
            setInput('')
            console.log(setCep)

        }catch{

            alert('Ops! Erro ao buscar.');
            setInput('')

        }
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
        
        { Object.keys(cep).length > 0 && (/* retorna a informação somente ser for preenchida */

            <main className={ styles.main }>

                <h2>CEP: {cep.cep}</h2>

                <span>Logradouro: {cep.logradouro}</span>
                <span>Bairro: {cep.bairro}</span>
                <span>Cidade: {cep.localidade} - {cep.uf}</span>

            </main>

        ) }
        

    </div>
  )
}

export default Container