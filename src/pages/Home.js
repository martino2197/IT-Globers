import React, { useState, useEffect } from 'react';

//components
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import { Form } from '../components/Form'

//Api
import { Api } from '../API/Api'


// Hooks
import { useInputValue } from '../Hooks/useInputValue'

const onSubmitUser = (data) => {
    console.log("Información del formulario", data)
}

export const Home = () => {
    const [selected, setSelected] = useState(null)
    const name = useInputValue('')
    const email = useInputValue('')
    const phoneNumber = useInputValue('')
    const age = useInputValue('')

    const user = {
        name,
        email,
        phoneNumber,
        age
    }

    useEffect(() => {
        name.setValue('')
        email.setValue('')
        phoneNumber.setValue('')
        age.setValue('')
    }, [selected])

    return (
        <>
            <Header/>
            <Menu data={Api} setSelected={setSelected} />
            <Form selected={selected} setSelected={setSelected} user={user} onSubmit={onSubmitUser}/>
        </>
    )
}