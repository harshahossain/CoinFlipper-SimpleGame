import React, { Component } from 'react';
import './coin.css'
class Coin extends Component{
    render(){
        return(
            <div className='Coin'>
                <img className='Coin-img' src={this.props.result} alt={this.props.result}/>
            </div>
        )
    }
}

export default Coin;