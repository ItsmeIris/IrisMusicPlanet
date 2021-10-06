import React from 'react'
import { Grid, Image, Container } from 'semantic-ui-react'


class AboutMe extends React.Component {



  render() {

    return (
      <div className="AboutMe">


        <div id="section3-1" className="section">
          <Container>
            <Grid columns={2}>
              <Grid.Row>

                <Grid.Column>

                  <Image className="profile-image" src="https://blobs.zhxi.co/students/iris/image/me.jpg" circular />
                </Grid.Column>


              </Grid.Row>
            </Grid>
          </Container>
        </div>


      </div>





    )

  }
}



export default AboutMe
