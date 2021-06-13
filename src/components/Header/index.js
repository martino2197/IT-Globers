import React from 'react';

import { HeaderContainer, Image, Name } from './styles'

//assets
// import logo from 'assets/images/logo.png'

export const Header = () => {
    return (
        <HeaderContainer>
                <Image src='assets/images/logo.png'/>
                <Name>
                    <p>Luis Martin Maceda Nazario</p>
                </Name>
        </HeaderContainer>
    )
}


{/* <ul>
<li>
    <a href="/">Cuenta</a>
</li>
<li>
    <a href="">Cerrar Sesión</a>
</li>
</ul> */}