import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    state = {
        imgGlasses: false,
    }

    changeImg(){
        this.setState({imgGlasses: !this.state.imgGlasses})
    }

    render() {
        const { imgClicked, img } = this.props
        return (
            <div>
                <img onClick={() => this.changeImg()} src={this.state.imgGlasses ? imgClicked : img} alt="Change imagen" />
            </div>
        )
    }
}
