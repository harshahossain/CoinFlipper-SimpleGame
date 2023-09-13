import React, { Component } from 'react';
import Coin from './coin';

class Flipper extends Component{
    static defaultProps={
        heads:'https://en.numista.com/catalogue/photos/bangladesh/257-original.jpg',
        tails:'https://en.numista.com/catalogue/photos/bangladesh/256-original.jpg'
    }
    constructor(props){
        super(props);
        this.state={
            flipCount:0,
            headCount:0,
            tailCount:0,
            img:''
        }
        this.handleClick=this.handleClick.bind(this);
    }
    
    coinHandler(){
        this.setState(curState=>({//calling with callback function to setState asynchronous dekhe
            flipCount:curState.flipCount+1
        }))
        
        let rslt=Math.random();
        console.log(rslt)
        console.log(rslt?'true':'false')
        if(rslt>=0.5){
            this.setState(curState=>({//calling with callback function to setState asynchronous dekhe
                headCount:curState.headCount+1,
                img:this.props.heads
            }))
        }else{          
            this.setState(curState=>({//calling with callback function to setState asynchronous dekhe
                tailCount:curState.tailCount+1,
                img:this.props.tails
            }))
        }
            
    }

    handleClick(e){
        this.coinHandler();
    }
    render(){
        return(
            <section className='Flipper'>
                <h1>Lets Flip A coin!</h1>
                <Coin result={this.state.img}/>
                <button onClick={this.handleClick}>Click to Flip</button>
                <p>Out of {this.state.flipCount} flips, there have been {this.state.headCount} heads and {this.state.tailCount} tails.</p>
            </section>
        )
    }
}


export default Flipper;