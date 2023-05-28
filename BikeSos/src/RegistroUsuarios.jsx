import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function hola() {
  console.log('hola mundo')
}
export function ContRegistro(user) {
  return (
    <>
      <div className='infoUsuario'>
        <h1>Registro de Usuarios</h1>
        <div className='cont-usuario'>
          <strong>Usuario</strong>
          <input type="value" />
        </div>

        <div className='cont-password'>
          <strong>Contraseña</strong>
          <input type="value" />
        </div>
      </div>
      <div className='infoBicicleta'>
        <h1>Info Bicicle</h1>
        <strong>Modelo Bicicleta</strong>
        <input type="value" />
        <strong>Rodada</strong>
        <input type="value" />

        <strong>Rol</strong>
        <input type="value" />
      </div>

      <button className='button-registrar' onClick={hola}>Registrar</button>
    </>
  )

}


