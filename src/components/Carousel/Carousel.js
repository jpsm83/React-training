import React, { Component } from 'react'

export default class Carousel extends Component {
    state = {
        index: 0
    }

    btnLeft(){
        if(this.state.index > 0){
            this.setState({
                index: this.state.index -1
            })
        } else {
            this.setState({
                index: 3
            })
        }
    }

    btnRight(){
        if(this.state.index < 3){
            this.setState({
                index: this.state.index +1
            })
        } else {
            this.setState({
                index: 0
            })
        }
    }

    render() {
        const { imgs } = this.props
        return (
            <div>
                <button onClick={() => this.btnLeft()} className="btnLeft">Left</button>
                    <img src={imgs[this.state.index]} alt="People" />
                <button onClick={() => this.btnRight()} className="btnRight">Right</button>
            </div>
        )
    }
}