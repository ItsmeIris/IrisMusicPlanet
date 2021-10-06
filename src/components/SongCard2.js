import React from "react"
import { Card, Image, Button, Grid, Container } from 'semantic-ui-react'
class SongCard2 extends React.Component {
    
    render() {
        const props = this.props
        return (
            <div className="SongCard">
                <Card onClick={() => props.clickedOnSong(props.id)}>
                    <Card.Content>
                        <Container>

                            <Grid>
                                <Grid.Row columns={2}>

                                    <Grid.Column width={6}>
                                    <Image src={props.image} />
                                        {/* <div className="cardbutton"> */}
                                            <Button circular icon="play" size="medium" onClick={() => props.clickedOnSong(props.id)}></Button>
                                        {/* </div> */}
                                    </Grid.Column>
                                    <Grid.Column width={10}>
                                    <Card.Header>{props.title}</Card.Header>
                                        <Card.Meta>
                                            <p>{props.singer.join('/')}</p>
                                        </Card.Meta>
                                        <Card.Description>
                                            <p className='album'>{props.album}</p>
                                        </Card.Description>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            </Container>
                    </Card.Content>

                </Card>

            </div>
        )
    }
}
export default SongCard2