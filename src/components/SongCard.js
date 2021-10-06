import React from "react"
import { Card, Image, Button } from 'semantic-ui-react'
class SongCard extends React.Component {
    render() {
        const props = this.props
        return (
            <div className="SongCard">
                <Card onClick={() => props.clickedOnSong(props.id)}>
                    <Card.Content>

                        <Image src={props.image} />
                        <div className="cardbutton">
                            <Button circular icon="play" size="medium" onClick={() => props.clickedOnSong(props.id)}></Button>
                        </div>
                        <p></p>
                        <Card.Header>{props.title}</Card.Header>
                        <Card.Meta>
                            <p>{props.singer.join('/')}</p>
                        </Card.Meta>
                        <Card.Description>
                            <p className='album'>{props.album}</p>
                        </Card.Description>
                    </Card.Content>

                </Card>

            </div>
        )
    }
}
export default SongCard