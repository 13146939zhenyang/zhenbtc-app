import React from 'react'
import './DateItem.scss'

class DateItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            date: new Date()
        }
    }
    updateTime(){
        
    }
    render(){
        return (
            <div className="dateContainer">
                <div className="dateContainer-item">{this.state.date.toLocaleDateString()}</div>
            </div>
        )
    }
}

export default DateItem