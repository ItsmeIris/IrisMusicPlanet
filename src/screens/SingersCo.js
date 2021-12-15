import React from 'react'
import { Grid, Button, Image, Container } from 'semantic-ui-react'
import Slider from "react-slick";
import { Link } from "react-router-dom";



class SingersColumn extends React.Component {



  render() {


    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    }

    return (
      <div className="SingersColumn">


        <div id="section3-1" className="section">
        <Grid.Column>
          <div>
            <Slider {...settings}>
              <div>
                <Image src="https://blobs.zhxi.co/students/iris/image/singerstaylor.jpg" />
              </div>
              <div>
                <Image src="https://blobs.zhxi.co/students/iris/image/singerscardi.jpg" />
              </div>
              <div>
                <Image src="https://blobs.zhxi.co/students/iris/image/singerskhalid.jpg" />
              </div>
              <div>
                <Image src="https://blobs.zhxi.co/students/iris/image/singersbazzi.jpg" />
              </div>
              <div>
                <Image src="https://blobs.zhxi.co/students/iris/image/singerstroye.jpg" />
              </div>
              <div>
                <Image src="https://blobs.zhxi.co/students/iris/image/singersariana.jpg" />
              </div>
              <div>
                <Image src="https://blobs.zhxi.co/students/iris/image/singersbillie.jpg" />
              </div>
              <div>
                <Image src="https://blobs.zhxi.co/students/iris/image/singersbts.jpg" />
              </div>
            </Slider>
          </div>
          </Grid.Column>
        </div>


        <div id="section3-2" className="section">
          <Container>

            <Grid>
              <Grid.Row columns={2}>

                <Grid.Column width={"100%"}>
                  <div id="image1" className="imagesection">
                    <Grid>
                      <Grid.Column width={8} >
                        <Image src='https://blobs.zhxi.co/students/iris/image/ty1.jpg' />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/ty2.jpg' />
                      </Grid.Column>

                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/ty3.jpg' />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/ty4.jpg' />
                      </Grid.Column>
                    </Grid>
                  </div>
                </Grid.Column>



                <Grid.Column width={"100%"}>
                  <div id="section3-2" className="words">
                    <h1>Taylor Swift</h1>
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




        <div id="section3-3" className="section">
          <Container>

            <Grid>
              <Grid.Row columns={2}>

                <Grid.Column width={"100%"}>
                  <div id="section3-3" className="words">
                    <h1>Bazzi</h1>
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
                      <Grid.Column width={8} >
                        <Image src='https://blobs.zhxi.co/students/iris/image/bz1.jpg' />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/bz2.jpg' />
                      </Grid.Column>

                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/bz3.jpg' />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/bz4.jpg' />
                      </Grid.Column>
                    </Grid>
                  </div>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </Container>
        </div>


        <div id="section3-4" className="section">
          <Container>

            <Grid>
              <Grid.Row columns={2}>

                <Grid.Column width={"100%"}>
                  <div id="image1" className="imagesection">
                    <Grid>
                      <Grid.Column width={8} >
                        <Image src='https://blobs.zhxi.co/students/iris/image/lauv1.jpg' />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/lauv2.jpg' />
                      </Grid.Column>

                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/lauv3.jpg' />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/lauv4.jpg' />
                      </Grid.Column>
                    </Grid>
                  </div>
                </Grid.Column>

                <Grid.Column width={"100%"}>
                  <div id="section3-4" className="words">
                    <h1>Lauv</h1>
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


        <div id="section3-5" className="section">
          <Container>

            <Grid>
              <Grid.Row columns={2}>

                <Grid.Column width={"100%"}>
                  <div id="section3-5" className="words">
                    <h1>Khalil Fong</h1>
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
                      <Grid.Column width={8} >
                        <Image src='https://blobs.zhxi.co/students/iris/image/fdt4.jpg' />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/fdt1.jpg' />
                      </Grid.Column>

                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/fdt2.jpg' />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/fdt3.jpg' />
                      </Grid.Column>
                    </Grid>
                  </div>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </Container>
        </div>

        <div id="section3-6" className="section">
          <Container>

            <Grid>
              <Grid.Row columns={2}>

                <Grid.Column width={"100%"}>
                  <div id="image1" className="imagesection">
                    <Grid>
                      <Grid.Column width={6} >
                        <Image src='https://blobs.zhxi.co/students/iris/image/niki4.jpg' />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/niki3.jpg' />
                      </Grid.Column>

                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/niki1.jpg' />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image src='https://blobs.zhxi.co/students/iris/image/niki2.jpg' />
                      </Grid.Column>
                    </Grid>
                  </div>
                </Grid.Column>

                <Grid.Column width={"100%"}>
                  <div id="section3-6" className="words">
                    <h1>Niki</h1>
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





      </div>





    )

  }
}



export default SingersColumn
