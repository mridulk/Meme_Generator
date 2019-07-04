import React, { Component } from 'react'
import './Meme.css'
class Meme extends Component {
    handleChangeTop(event) {
        this.setState({
            toptext: event.target.value
        })

    }
    handleChangeCenter(event) {
        this.setState({
            centertext: event.target.value
        })

    }
    handleChangeBottom(event) {
        this.setState({
            bottomtext: event.target.value
        })

    }
    constructor(props) {
        super(props)

        this.state = {
            toptext: '',
            centertext: '',
            bottomtext: '',
            randomImage: "https://scontent-lga3-1.cdninstagram.com/vp/ca527080ec030d2ba1e1837be4306a0a/5DA29601/t51.2885-15/sh0.08/e35/c30.0.651.651a/s640x640/62449867_118253279181597_7142209291494233033_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com",
            allMemesImg: [],
            color:'white'
        }
        this.handleChangeTop = this.handleChangeTop.bind(this)
        this.handleChangeCenter = this.handleChangeCenter.bind(this)
        this.handleChangeBottom = this.handleChangeBottom.bind(this)
        this.chooseRandom = this.chooseRandom.bind(this)
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    chooseRandom(){
        let length = this.state.allMemesImg.length
        let arrayIndex = this.getRandomInt(length - 1)
        console.log("array length", length)
        console.log("Index", arrayIndex)
        this.setState({
            randomImage : this.state.allMemesImg[arrayIndex].url
        })
    }
    onClickBlack(){
        this.setState({
            color:'black'
        })
    }
    onClickWhite(){
        this.setState({
            color:'white'
        })
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({
                    allMemesImg: memes
                })
            })
            
        }

    render() {
        return (
            <div className="container text-center align-items-center pb-2 ">
                <div className="row bg-primary">
                    <div className="col-lg-12 ">
                        <h2 className="font-weight-light">Meme Generator</h2>
                    </div>
                </div>


                {/* <form className="form-inline ">
                        
                            <div className="form-group p-1">
                                <input type="text" placeholder="Text On Top" className="form-control" />
                            </div>
                        
                        
                            <button type="submit" className="btn btn-success">ADD</button>
                      
                    </form> */}
                <form >
                    <div className="form-group col-12 mb-2 mt-2">
                        <input type="text" className="form-control" value={this.state.toptext} placeholder="Add Text On Top" onChange={this.handleChangeTop} />
                    </div>
                </form>
                <form >
                    <div className="form-group col-12 mb-2">
                        <input type="text" className="form-control" value={this.state.centertext} placeholder="Add Text On Center" onChange={this.handleChangeCenter} />
                    </div>
                </form>
                <form >
                    <div className="form-group col-12 mb-2">
                        <input type="text" className="form-control" placeholder="Add Text On Bottom" value={this.state.bottomtext} onChange={this.handleChangeBottom} />
                    </div>
                </form>
                
                {/* <img src={image} className="rounded mx-auto d-block img-fluid" width="800px" height="200px" alt="..."></img> */}
                <div class="container textClass" style={{color:this.state.color}}>
                    <img src={this.state.randomImage} className="rounded mx-auto d-block img-fluid"   alt="Snow" />
                    <div class="bottom-left"><strong>{this.state.bottomtext}</strong></div>
                    <div class="top-left"><strong>{this.state.toptext}</strong></div>
                    {/* <div class="top-right">Top Right</div> */}
                    {/* <div class="bottom-right">Bottom Right</div> */}
                    <div class="centered"><strong>{this.state.centertext}</strong></div>
                </div>
                <div className="text-align-center col-12 p-2">
                    <button onClick={this.chooseRandom} className="btn btn-primary">Gen</button>
                </div>
                <div className="row">
                    <div className="col-6">
                        <button onClick={this.onClickWhite.bind(this)} className="btn bg-white btnClass"></button>
                    </div>
                    <div className="col-6">
                        <button onClick={this.onClickBlack.bind(this)} className="btn bg-dark"></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Meme
