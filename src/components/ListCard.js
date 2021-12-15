import React from "react"
import { Card, Image, Button, Modal, Segment } from 'semantic-ui-react'
import SoongsInList from "./SongsInlList"
import listsongs from "../data/listsongs"

class ListCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            size: undefined,
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
        const props = this.props
        console.log(listsongs)
        const _self = this
        console.log(this.props)
        
        return (
            <div className="ListCard">
                <Card>


                    <Card.Content>
                        <Image src={props.image} />
                        <p></p>
                        <Card.Header>{props.title}</Card.Header>
                        <Card.Meta>
                            <p>{props.tag.join('/')}</p>
                        </Card.Meta>
                        <Card.Description>
                            <p>{props.description}</p>
                            <Button onClick={this.openImage} >check</Button>
                            
                            <Modal onOpen={this.openImage}
                                onClose={this.closeImage}
                                open={this.state.modalOpen}
                                size='small'

                                closeIcon
                                className="modalSongs"
                            >
                            <div>
                                {listsongs.map(function (item) {
                                    return (
                                        <Segment>
                                            <SoongsInList
                                                title={item.title}
                                                id={item.id}
                                                singer={item.singer}
                                                album={item.album}
                                                image={item.album}
                                                clickedOnSong={_self.props.clickedOnSong}
                                            />
                                        </Segment>
                                    )
                                })}
                            </div>
                            </Modal>
                            
                            
                        </Card.Description>
                    </Card.Content>

                </Card>

            </div>
        )
    }
}
export default ListCard