import React from "react"
import { Card, Image, Button } from 'semantic-ui-react'
class ArianaCard extends React.Component {
    render() {
        const props = this.props
        return (
            <div className="ArianaCard">
                <Card onClick={() => props.clickedOnSong(props.id)}>
                    <Card.Content>

                        <Image src={props.image} />
                        <div className="cardbutton">
                            <Button onClick={() => props.clickedOnSong(props.id)}>SPOTIFY</Button>
                        </div>
                        <p></p>
                        <Card.Header>{props.title}</Card.Header>
                        <Card.Content>{props.detail}</Card.Content>
                    </Card.Content>

                </Card>

            </div>
        )
    }
}
export default ArianaCard