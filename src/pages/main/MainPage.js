import React from 'react'
import './MainPage.scss'
import Header from '../../componenets/header/Header'
import PriceList from '../../componenets/priceList/PriceList'
import DateItem from '../../componenets/dateItem/DateItem'

class MainPage extends React.Component{
    render(){
        return (
        <div className="mainContainer">
            <Header/>
            <PriceList title="BTC"/>
            <DateItem/>
        </div>
        )
    }
}

export default MainPage