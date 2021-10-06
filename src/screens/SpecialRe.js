import React from 'react'
import { Grid, Button, Icon, Image, Container, Modal } from 'semantic-ui-react'
import SongCard from '../components/SongCard'
import music from "../data/music"
import { Player } from 'video-react'



class SpecialRecommendation extends React.Component {


  getSingerName(id) { //inside class do not need function 
    var singerData = music.singers.find(function (item) {
      return item.id === id
    })
    return singerData.Name
  }

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      modalOpen1: false,
      size: undefined
    }
    this.openImage = this.openImage.bind(this)
    this.closeImage = this.closeImage.bind(this)
    this.openImage1 = this.openImage1.bind(this)
    this.closeImage1 = this.closeImage1.bind(this)
  }

  openImage(event) {
    this.setState({
      modalOpen: true,

    })
  }

  closeImage(event) {
    this.setState({
      modalOpen: false
    })
  }

  openImage1(event) {
    this.setState({
      modalOpen1: true,

    })
  }

  closeImage1(event) {
    this.setState({
      modalOpen1: false
    })
  }

  render() {
    const _self = this
    console.log(this.props)


    return (
      <div className="SpecialRecommendation">

        <div id="section2-1-1" className="section">

          <Container>
            <Grid columns={2}>
              <Grid.Row>

              <Grid.Column width={"100%"}>
                  <div id="image2-1" className="imagesection">
                    <Grid>

                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/sky1.jpg' />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/sky2.jpg' />
                      </Grid.Column>
                    </Grid>
                  </div>
                </Grid.Column>

                <Grid.Column>
                  <div className="picture1">
                    <h1>Everyday Life</h1>
                    <Icon disabled name='heart' /><Icon disabled name='heart' /><Icon disabled name='heart' /><Icon disabled name='heart' /><Icon disabled name='heart outline' />
                    <h3>description</h3>
                    <Button onClick={this.openImage1} >see the video</Button>
                    <Modal onOpen={this.openImage1}
                      onClose={this.closeImage1}
                      open={this.state.modalOpen1}
                      size='small'

                      closeIcon
                    >

                      <Player>
                        <source src="https://blobs.zhxi.co/students/iris/video/Coldplay-Everyday Life(蓝光).mp4" />
                      </Player>

                    </Modal>

                  </div>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </Container>
        </div>

        <div id="section2-1-2" className="section">

          <Container>
            <Grid columns={2}>
              <Grid.Row>

                <Grid.Column>
                  <div className="picture1">
                    <h1>thank u, next</h1>
                    <Icon disabled name='heart' /><Icon disabled name='heart' /><Icon disabled name='heart' /><Icon disabled name='heart' /><Icon disabled name='heart outline' />
                    <h3>description</h3>
                    <Button onClick={this.openImage} >see the video</Button>
                    <Modal onOpen={this.openImage}
                      onClose={this.closeImage}
                      open={this.state.modalOpen}
                      size='small'

                      closeIcon
                    >

                      <Player>
                        <source src="https://blobs.zhxi.co/students/iris/video/Ariana Grande-thank u, next(蓝光).mp4" />
                      </Player>

                    </Modal>

                  </div>
                </Grid.Column>

                
                <Grid.Column width={"100%"}>
                  <div id="image2-1" className="imagesection">
                    <Grid>

                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/thxu2.jpg' />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/thxu3.jpg' />
                      </Grid.Column>
                    </Grid>
                  </div>
                </Grid.Column>



              </Grid.Row>
            </Grid>
          </Container>
        </div>




        <div id="cards" className="section">

          <div id="section2-2" className="section">
            <Container>
              <Grid columns={5} doubling stackable>

                {music.specialRecommendation.map(function (item) {
                  const singerNames = item.singer.map(function (it) {
                    const nameSinger = _self.getSingerName(it)
                    return nameSinger
                  })
                  //console.log('These are the singer names: ',singerNames)
                  return (
                    <Grid.Column key={item.id}>
                      <SongCard
                        id={item.id}
                        image={item.imageUrl}
                        singer={singerNames}
                        title={item.title}
                        album={item.album}
                        clickedOnSong={_self.props.clickedOnSong}
                      />
                    </Grid.Column>
                  )
                })
                }
              </Grid>
            </Container>
          </div>

        </div>
      </div>





    )
  }
}



export default SpecialRecommendation




