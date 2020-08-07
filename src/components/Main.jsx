import React from 'react'
import Header from './Main/Header'
import About from './about/About'
import Services from './services/Services'
import Callout from './callout/Callout'
import Portfolio from './portfolio/Portfolio'
import CalloutWButtons from './callout/CalloutWButtons'
import Map from './map/Map'

const Main = () => {
    return (
        <>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Callout></Callout>
            <Portfolio></Portfolio>
            <CalloutWButtons></CalloutWButtons>
            <Map></Map>
        </>
    )
}

export default Main
