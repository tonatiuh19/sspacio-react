import React from 'react'
import Searcher from './Searcher'

const Header = () => {
    return (
        <header className="masthead d-flex">
            <div className="container text-center my-auto">
                <div className="float-right text-white">
                    <h1 className="mb-1">Stylish Portfolio</h1>
                    <h3 className="mb-5">
                        <em>A Free Bootstrap Theme by Start Bootstrap</em>
                    </h3>
                </div>
            <div>
                <Searcher></Searcher>
            </div>
            </div>
            <div className="overlay"></div>
        </header>
    )
}

export default Header
