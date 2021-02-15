import React from 'react'
import Axios from 'axios'
import LoadingMask from '../loading/LoadingMask'
import './PriceList.scss' 

const API_key = process.env.REACT_APP_BTC_API_KEY
const API_url = process.env.REACT_APP_BTC_API_URL
const API_par = process.env.REACT_APP_BTC_API_PAR
const api = `${API_url}/query?${API_par}&apikey=${API_key}`

class PriceList extends React.Component{
    constructor(){
        super();
        this.state = {
            openPrice: 0,
            highPrice: 0,
            lowPrice: 0,
            closePrice: 0,
            isLoading: true
        };
    }
    async componentDidMount(){
         try{
            const response = await Axios.get(api)
            const firstRes = response.data;
            const secondRes = firstRes[Object.keys(firstRes)[1]];
            const result = secondRes[Object.keys(secondRes)[Object.keys(secondRes).length-1]];
            const openPrice = Number(result[Object.keys(result)[0]]).toFixed(2)
            const highPrice = Number(result[Object.keys(result)[2]]).toFixed(2)
            const lowPrice = Number(result[Object.keys(result)[4]]).toFixed(2)
            const closePrice = Number(result[Object.keys(result)[6]]).toFixed(2)
            this.setState (
                {
                    openPrice,
                    highPrice,
                    lowPrice,
                    closePrice,
                    isLoading: false
                }
             )
         }
         catch (e){
             console.log(e)
         }
    }
    render(){
        const {isLoading} = this.state
        return (
            <div className="priceContainer">
                {isLoading && <LoadingMask />}
                {!isLoading &&
                <div className="priceContainer-detail">
                    <h1>{this.props.title}</h1>
                    <div className="priceContainer-detail__itembox">
                        <div className="priceContainer-detail__itembox--item">OpenPrice: ${this.state.openPrice}</div>
                        <div className="priceContainer-detail__itembox--item">HighPrice: ${this.state.highPrice}</div>
                        <div className="priceContainer-detail__itembox--item">LowPrice : ${this.state.lowPrice}</div>
                        <div className="priceContainer-detail__itembox--item">ClosePrice: ${this.state.closePrice}</div>                        
                    </div> 
                    
            </div>
                    
            }
            </div>
        )
    }
}


export default PriceList