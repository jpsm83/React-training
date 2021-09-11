import React, { Component } from 'react'

export default class LikeButton extends Component {
    state ={
        likes: 0,
        buttonColor: ['purple','blue','green','yellow','orange','red']
    }

    addLike(){
        this.setState({
            likes: this.state.likes + 1,
        })
    }

    render() {
        return (
            <div>
                <button 
                onClick={() => this.addLike()}
                style={{backgroundColor: this.state.buttonColor[Math.floor(Math.random() * this.state.buttonColor.length -1)]}}>{this.state.likes} Likes</button>
            </div>
        )
    }
}