import React from 'react';

import { SectionForm, FormUser } from './styles'

import { InputText } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

export const Form = ({ selected, setSelected, user, onSubmit }) => {
    const handleSumbit = (e) => {
        e.preventDefault()
        onSubmit({
          name: user.name.value,
          email: user.email.value,
          phoneNumber: user.phoneNumber.value,
          age: user.age.value,
          airline: selected
        })
        setSelected(null)
      }


    return(
        <SectionForm>
            {selected ? (
                <>
                    <h2>Hola, bienvenido, sabemos que quieres viajar en {selected}, por favor diligencia el siguiente formulario:</h2>
                    <FormUser onSubmit={handleSumbit}>
                        <InputText 
                            type='text'
                            name='name'
                            placeholder='Nombre'
                            aria-label='Nombre'
                            maxLength='50'
                            minLength='3'
                            pattern="[a-zA-Z'-'\s]*"
                            title="Ingrese únicamente caracteres del alfabeto"
                            required
                            {...user.name}
                        />
                        <InputText 
                            type='email'
                            name='email'
                            placeholder='Correo'
                            aria-label='Correo'
                            maxLength='50'
                            minLength='5'
                            required
                            {...user.email}
                        />
                        <InputText 
                            type='tel'
                            name='phoneNumber'
                            placeholder='Teléfono'
                            aria-label='Teléfono'
                            maxLength='10'
                            // minLength='10'
                            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                            title="Ingrese únicamente caracteres numéricos (10 dígitos)"
                            required
                            // minlength={10}
                            {...user.phoneNumber}
                        />
                        <InputText 
                            type='number'
                            name='age'
                            placeholder='Ingrese su edad'
                            aria-label='Edad'
                            max={100}
                            min={18}
                            required
                            {...user.age}
                        />
                        <Button>Enviar</Button>
                    </FormUser>
                </>) : 
                (<>
                    <h2>Selecciona una Aerolínea</h2>
                    <FormUser onSubmit={handleSumbit}>
                        <InputText 
                            type='text'
                            name='name'
                            placeholder='Nombre'
                            aria-label='Nombre'
                            maxLength='50'
                            minLength='3'
                            pattern="[a-zA-Z'-'\s]*"
                            title="Ingrese únicamente caracteres del alfabeto"
                            required
                            disabled
                            {...user.name}
                        />
                        <InputText 
                            type='email'
                            name='email'
                            placeholder='Correo'
                            aria-label='Correo'
                            maxLength='50'
                            minLength='5'
                            required
                            disabled
                            {...user.email}
                        />
                        <InputText 
                            type='tel'
                            name='phoneNumber'
                            placeholder='Teléfono'
                            aria-label='Teléfono'
                            maxLength='10'
                            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                            title="Ingrese únicamente caracteres numéricos (10 dígitos)"
                            required
                            disabled
                            {...user.phoneNumber}
                        />
                        <InputText 
                            type='number'
                            name='age'
                            placeholder='Ingrese su edad'
                            aria-label='Edad'
                            max={100}
                            min={18}
                            required
                            disabled
                            {...user.age}
                        />
                        <Button disabled>Enviar</Button>
                    </FormUser>
                </>)}

        </SectionForm>
    )
}