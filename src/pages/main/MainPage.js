import React from 'react'
import './MainPage.scss'
import Header from '../../components/header/Header'
import PriceList from '../../components/priceList/PriceList'
import DateItem from '../../components/dateItem/DateItem'

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