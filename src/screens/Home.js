
import React from 'react';
import { Grid, Button, Icon, Image, Container, Modal } from 'semantic-ui-react';
import Slider from "react-slick";
import { Player } from 'video-react'
import ListCard from '../components/ListCard'
import list from '../data/list'
import { Link } from "react-router-dom";

//zhongx!Iris



class Homepage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      size: undefined,
      modelOpen1: false,
      modelOpen2: false,
      modelOpen3: false,
      modelOpen4: false
    }
    this.openImage = this.openImage.bind(this)
    this.closeImage = this.closeImage.bind(this)
    this.openImage1 = this.openImage1.bind(this)
    this.closeImage1 = this.closeImage1.bind(this)
    this.openImage2 = this.openImage2.bind(this)
    this.closeImage2 = this.closeImage2.bind(this)
    this.openImage3 = this.openImage3.bind(this)
    this.closeImage3 = this.closeImage3.bind(this)
    this.openImage4 = this.openImage4.bind(this)
    this.closeImage4 = this.closeImage4.bind(this)
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

  openImage2(event) {
    this.setState({
      modalOpen2: true,

    })
  }

  closeImage2(event) {
    this.setState({
      modalOpen2: false
    })
  }
  openImage3(event) {
    this.setState({
      modalOpen3: true,

    })
  }

  closeImage3(event) {
    this.setState({
      modalOpen3: false
    })
  }
  openImage4(event) {
    this.setState({
      modalOpen4: true,

    })
  }

  closeImage4(event) {
    this.setState({
      modalOpen4: false
    })
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    }

    const _self = this

    return (
      <div className="homepage">



        <div id="section1-2" className="section">
          <Container>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <div className="title">
                    <h1 className="x-title">Music Planet</h1>
                    <h3 className="x-subtitle">welcome!</h3>
                    <div className="x-text">Sharing my favorite music！</div>
                    <div className="x-button-wrapper">
                      <Button color="pink">Go check</Button>
                    </div>
                  </div>

                </Grid.Column>
                <Grid.Column>
                  <div>

                    <Slider {...settings}>
                      <div>
                        <Image src="https://blobs.zhxi.co/students/iris/image/home1.jpg" />
                      </div>

                    </Slider>
                  </div>

                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>

        <div id="section1-3" className="section">
          <h1>exploring music world</h1>
          <br />
        </div>




        <div id="section1-4" className="section">
          <Container>
            <Grid columns={2}>
              <Grid.Row>

                <Grid.Column>
                  <div className="imagesection">

                    <Image src='https://blobs.zhxi.co/students/iris/image/mmvv1.jpg' circular />
                  </div>
                </Grid.Column>



                <Grid.Column>
                  <div className="words">
                    <h1>Talk Me down</h1>
                    <Icon disabled name='heart' /><Icon disabled name='heart' /><Icon disabled name='heart' /><Icon disabled name='heart outline' /><Icon disabled name='heart outline' />
                    <h3>The final of Troye Sivan's Blue Trilogy --- The ending of a love story between two boys</h3>
                    <h4>
                      "I'd rather fuel a fantasy than deal with this alone."
                    </h4>
                    <Button onClick={this.openImage} >check the video</Button>
                    <Modal onOpen={this.openImage}
                      onClose={this.closeImage}
                      open={this.state.modalOpen}
                      size='small'

                      closeIcon
                    >

                      <Player>
                        <source src="https://blobs.zhxi.co/students/iris/video/Troye Sivan-TALK ME DOWN(超清).mp4" />
                      </Player>

                    </Modal>
                  </div>

                </Grid.Column>



              </Grid.Row>
            </Grid>
          </Container>
        </div>



        <div id="section1-5" className="section">
          <Container>
            <Grid columns={2}>
              <Grid.Row>

                <Grid.Column>
                  <div className="words" >
                    <h1>Dusk Till Down</h1>
                    <Icon disabled name='heart' /><Icon disabled name='heart' /><Icon disabled name='heart' /><Icon disabled name='heart' /><Icon disabled name='heart outline' />
                    <h3>
                    An mv with movie-like wonderful plot</h3>
                    <h4>
                    With perfect chemical reaction of ZAYN and Sia's voice, this song debuted at number 44 on the US Billboard chart [1] in its first week, topping the charts in 6 countries and reaching the top 10 in 20 countries including Australia, Canada, Countries, France and the UK.
                    </h4>
                    <Button onClick={this.openImage1} >check the video</Button>
                    <Modal onOpen={this.openImage1}
                      onClose={this.closeImage1}
                      open={this.state.modalOpen1}
                      size='small'

                      closeIcon
                    >

                      <Player>
                        <source src="https://blobs.zhxi.co/students/iris/video/ZAYN-Sia-Dusk Till Dawn(蓝光).mp4" />
                      </Player>

                    </Modal>

                  </div>
                </Grid.Column>

                <Grid.Column>
                  <div className="imagesection">

                    <Image src='https://blobs.zhxi.co/students/iris/image/mmvv2.jpg' circular />
                  </div>

                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>

        <div id="section1-6" className="section">
          <Container>
            <Grid columns={2}>
              <Grid.Row>

                <Grid.Column>
                  <div className="imagesection">

                    <Image src='https://blobs.zhxi.co/students/iris/image/nct.jpg' circular />
                  </div>
                </Grid.Column>



                <Grid.Column>
                  <div id="section1-6-2" className="words">
                    <h1>Hello Future</h1>
                    <Icon disabled name='heart' /><Icon disabled name='heart' /><Icon disabled name='heart' /><Icon disabled name='heart outline' /><Icon disabled name='heart outline' />
                    <h3>NCTDream is back with a regular follow-up "Hello Future" 🥳</h3>
                    <h4>The main song 'Hello Future' is a hip pop dance music with trap rhythm, which combines the strong synthesizer and the hook of addictive atmosphere.
                      The lyrics are full of vitality to express the growing together with the coming hopeful Future after overcoming the trauma of war.
                    </h4>
                    <Button onClick={this.openImage2} >check the video</Button>
                    <Modal onOpen={this.openImage2}
                      onClose={this.closeImage2}
                      open={this.state.modalOpen2}
                      size='small'

                      closeIcon
                    >

                      <Player>
                        <source src="https://blobs.zhxi.co/students/iris/video/NCT DREAM-NCT DREAMHello FutureMV(蓝光).mp4" />
                      </Player>
                    </Modal>
                  </div>
                </Grid.Column>



              </Grid.Row>
            </Grid>
          </Container>
        </div>


        <div id="section1-7" className="section">
          <Container>

            <Grid>
              <Grid.Row columns={2}>

                <Grid.Column width={"100%"}>
                  <div id="image1" className="imagesection">
                    <Grid>
                      <Grid.Column width={7} >
                        <Image src='https://blobs.zhxi.co/students/iris/image/ae.jpg' />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/ad.jpg' />
                      </Grid.Column>

                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/ab.jpg' />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/aa.jpg' />
                      </Grid.Column>
                    </Grid>
                  </div>
                </Grid.Column>



                <Grid.Column width={"100%"}>
                  <div id="section1-7-2" className="words">
                    <h1>Ariana Grande</h1>
                    <h3>"Sweetner" in my life</h3>
                    <h5> "She is a star on her own terms, never bending to any particular musical trend or path in the industry"</h5>
                    <p>Knowing Ariana Grande through her music then getting to learn more about her as a person,
                      her voice can always make me cheer up and stay faithful and her convictions and actions that "consistently stands up for herself
                      and her decisions in a world that isn't often hospitable to that sort of strength in young women"  constantly motivate me to keep moving forward...
                    </p>

                    <Button circular size="big" as={Link} to="artist/1" onClick={this.openImage2}>check</Button>
                  </div>

                </Grid.Column>


              </Grid.Row>
            </Grid>
          </Container>
        </div>




        <div id="section1-8" className="section">
          <Container>

            <Grid>
              <Grid.Row columns={2}>

                <Grid.Column width={"100%"}>
                  <div id="section1-8-1" className="words">
                    <h1>Troye Sivan</h1>
                    <h3>"Bloom" like a flower</h3>
                    <h5> "She is a star on her own terms, never bending to any particular musical trend or path in the industry"</h5>
                    <p>Knowing Ariana Grande through her music then getting to learn more about her as a person,
                      her voice can always make me cheer up and stay faithful and her convictions and actions that "consistently stands up for herself
                      and her decisions in a world that isn't often hospitable to that sort of strength in young women"  constantly motivate me to keep moving forward...
                    </p>

                    <Button circular size="big" as={Link} to="artist/2" onClick={this.openImage3}>check</Button>
                  </div>
                </Grid.Column>


                <Grid.Column width={"100%"}>
                  <div id="image1" className="imagesection">
                    <Grid>
                      <Grid.Column width={7} >
                        <Image src='https://blobs.zhxi.co/students/iris/image/tc.jpg' />
                      </Grid.Column>
                      <Grid.Column width={7}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/td.jpg' />
                      </Grid.Column>

                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/tb.jpg' />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/ta.jpg' />
                      </Grid.Column>
                    </Grid>
                  </div>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </Container>
        </div>


        <div id="section1-9" className="section">
          <Container>

            <Grid>
              <Grid.Row columns={2}>

                <Grid.Column width={"100%"}>
                  <div id="image1" className="imagesection">
                    <Grid>
                      <Grid.Column width={8} >
                        <Image src='https://blobs.zhxi.co/students/iris/image/kd.jpg' />
                      </Grid.Column>
                      <Grid.Column width={6}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/ka.jpg' />
                      </Grid.Column>

                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/kc.jpg' />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/kb.jpg' />
                      </Grid.Column>
                    </Grid>
                  </div>
                </Grid.Column>

                <Grid.Column width={"100%"}>
                  <div id="section1-9-1" className="words">
                    <h1>Khalid</h1>
                    <h3>"8TEEN" but the opposite of "Young Dumb & Broke"</h3>
                    <h5> "She is a star on her own terms, never bending to any particular musical trend or path in the industry"</h5>
                    <p>Knowing Ariana Grande through her music then getting to learn more about her as a person,
                      her voice can always make me cheer up and stay faithful and her convictions and actions that "consistently stands up for herself
                      and her decisions in a world that isn't often hospitable to that sort of strength in young women"  constantly motivate me to keep moving forward...
                    </p>

                    <Button circular size="big" as={Link} to="artist/8" onClick={this.openImage3}>check</Button>
                  </div>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </Container>
        </div>



        <div id="section1-10" className="section">
          <Container>

            <Grid>
              <Grid.Row columns={2}>

                <Grid.Column width={"100%"}>
                  <div id="section1-10-1" className="words">
                    <h1>NCT DREAM</h1>
                    <h3>Youth & Dream</h3>
                    <h5> "She is a star on her own terms, never bending to any particular musical trend or path in the industry"</h5>
                    <p>Knowing Ariana Grande through her music then getting to learn more about her as a person,
                      her voice can always make me cheer up and stay faithful and her convictions and actions that "consistently stands up for herself
                      and her decisions in a world that isn't often hospitable to that sort of strength in young women"  constantly motivate me to keep moving forward...
                    </p>

                    <Button circular size="big" as={Link} to="artist/16" onClick={this.openImage3}>check</Button>
                  </div>
                </Grid.Column>


                <Grid.Column width={"100%"}>
                  <div id="image1" className="imagesection">
                    <Grid width={'100%'}>
                      <Grid.Column width={8} >
                        <Image src='https://blobs.zhxi.co/students/iris/image/nct3.jpg' />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/nct4.jpg' />
                      </Grid.Column>

                      <Grid.Column width={10}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/nct2.jpg' />
                      </Grid.Column>
                      <Grid.Column width={6}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/nct1.jpg' />
                      </Grid.Column>
                    </Grid>
                  </div>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </Container>
        </div>

        <div id="section1-11" className="section">
          <Container>

            <Grid>
              <Grid.Row columns={2}>

                <Grid.Column width={"100%"}>
                  <div id="section1-11-1" className="words">
                    <h1>BlackPink</h1>
                    <h3>"You never know" girls' power</h3>
                    <h5> "She is a star on her own terms, never bending to any particular musical trend or path in the industry"</h5>
                    <p>Knowing Ariana Grande through her music then getting to learn more about her as a person,
                      her voice can always make me cheer up and stay faithful and her convictions and actions that "consistently stands up for herself
                      and her decisions in a world that isn't often hospitable to that sort of strength in young women"  constantly motivate me to keep moving forward...
                    </p>

                    <Button circular size="big" as={Link} to="artist/17" onClick={this.openImage3}>check</Button>
                  </div>
                </Grid.Column>


                <Grid.Column width={"100%"}>
                  <div id="image1" className="imagesection">
                    <Grid width={'100%'}>
                      <Grid.Column width={6} >
                        <Image src='https://blobs.zhxi.co/students/iris/image/bp2.jpg' />
                      </Grid.Column>
                      <Grid.Column width={10}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/bp3.jpg' />
                      </Grid.Column>

                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/bp4.jpg' />
                      </Grid.Column>
                      <Grid.Column width={7}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/bp1.jpg' />
                      </Grid.Column>
                    </Grid>
                  </div>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </Container>
        </div>




        <div id="cards" className="section">
          <div id="section1-12" className="section">



            <Container>

              <Grid columns={4}>
                {list.map(function (item) {
                  return (
                    <Grid.Column>
                      <ListCard
                        id={item.id}
                        image={item.imageUrl}
                        tag={item.tags}
                        title={item.title}
                        description={item.description}
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



export default Homepage





