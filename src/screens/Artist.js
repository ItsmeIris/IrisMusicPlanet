import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import ArianaCard from '../components/ArianaCard'
import music from "../data/music"


class Artist extends React.Component {
  

  render() {
    console.log("this is the id of the artists")
    const artistId = Number(this.props.match.params.id)
    console.log(artistId)
    const _self = this
    console.log(music.singersAlbums)
    const artistsAlbums = music.singersAlbums.filter(function(item) {
      return item.singer === artistId
    })
    console.log(artistsAlbums)
    return (
      <div className="Artist">
        <div id="section6-1" className="section">
          <Container>
            <Grid columns={4}>
              {artistsAlbums.map(function (item) {
                return (
                  <Grid.Column>
                    <ArianaCard
                      id={item.id}
                      image={item.imageUrl}
                      title={item.title}
                      detail={item.detail}
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
    )

  }
}



export default Artist