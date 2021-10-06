import React from 'react'
import { Grid, Button, Icon, Card, Image, Container, Divider} from 'semantic-ui-react'
import SongCard2 from '../components/SongCard2'
import music from "../data/music"



class NctDream extends React.Component {
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
            size: undefined
        }
        this.openImage = this.openImage.bind(this)
        this.closeImage = this.closeImage.bind(this)
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


    render() {

        console.log(this.props.match.params.id)
        const _self = this

        return (
            <div className="NctDream">

                <Container>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column width={13}>
                                <Grid>
                                    <Grid.Row columns={2}>

                                        <Grid.Column width={"100%"}>
                                            <div id="image2" className="imagesection2">
                                                <Grid>
                                                    <Grid.Column width={7} >
                                                        <Image src='image/内存条2.jpg' />
                                                    </Grid.Column>
                                                    <Grid.Column width={7}>
                                                        <Image src='image/内存条3.jpg' />
                                                    </Grid.Column>

                                                    <Grid.Column width={7}>
                                                        <Image src='image/内存条1.jpg' />
                                                    </Grid.Column>
                                                    <Grid.Column width={7}>
                                                        <Image src='image/内存条4.jpg' />
                                                    </Grid.Column>
                                                </Grid>
                                            </div>
                                        </Grid.Column>

                                        <Grid.Column width={"100%"}>
                                            <div id="section7-1-2" className="words2">
                                                <h1>We Young</h1>
                                                <h3>"8TEEN" but the opposite of "Young Dumb & Broke"</h3>
                                                <h5> "She is a star on her own terms, never bending to any particular musical trend or path in the industry"</h5>
                                                <p>Knowing Ariana Grande through her music then getting to learn more about her as a person,
                                                her voice can always make me cheer up and stay faithful and her convictions and actions that "consistently stands up for herself
                                        and her decisions in a world that isn't often hospitable to that sort of strength in young women"  constantly motivate me to keep moving forward...</p>
                                                <h1></h1>
                                            </div>
                                        </Grid.Column>

                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>

                            <Divider vertical>and</Divider>
                            
                            <Grid.Column width={3}>
                                {music.nct.map(function (item) {
                                    const singerNames = item.singer.map(function (it) {
                                        const nameSinger = _self.getSingerName(it)
                                        return nameSinger
                                    })
                                    //console.log('These are the singer names: ',singerNames)
                                    return (
                                        <Grid.Column key={item.id}>
                                            <SongCard2
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
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Container>





                <div id="section7-1" className="section">
                    <Container>

                        <Grid>
                            <Grid.Row columns={2}>

                                <Grid.Column width={"100%"}>
                                    <div id="image1" className="imagesection">
                                        <Grid>
                                            <Grid.Column width={7} >
                                                <Image src='image/内存条2.jpg' />
                                            </Grid.Column>
                                            <Grid.Column width={7}>
                                                <Image src='image/内存条3.jpg' />
                                            </Grid.Column>

                                            <Grid.Column width={7}>
                                                <Image src='image/内存条1.jpg' />
                                            </Grid.Column>
                                            <Grid.Column width={7}>
                                                <Image src='image/内存条4.jpg' />
                                            </Grid.Column>
                                        </Grid>
                                    </div>
                                </Grid.Column>

                                <Grid.Column width={"100%"}>
                                    <div id="section7-1-2" className="words">
                                        <h1>We Young</h1>
                                        <h3>"8TEEN" but the opposite of "Young Dumb & Broke"</h3>
                                        <h5> "She is a star on her own terms, never bending to any particular musical trend or path in the industry"</h5>
                                        <p>Knowing Ariana Grande through her music then getting to learn more about her as a person,
                                        her voice can always make me cheer up and stay faithful and her convictions and actions that "consistently stands up for herself
                                        and her decisions in a world that isn't often hospitable to that sort of strength in young women"  constantly motivate me to keep moving forward...</p>
                                        <h1></h1>
                                    </div>
                                </Grid.Column>

                            </Grid.Row>
                        </Grid>
                    </Container>
                </div>

                <div id="section7-2" className="section">
                    <Container>
                        <Grid columns={4} doubling stackable>

                            {music.nct.map(function (item) {
                                const singerNames = item.singer.map(function (it) {
                                    const nameSinger = _self.getSingerName(it)
                                    return nameSinger
                                })
                                //console.log('These are the singer names: ',singerNames)
                                return (
                                    <Grid.Column key={item.id}>
                                        <SongCard2
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





        )

    }
}



export default NctDream