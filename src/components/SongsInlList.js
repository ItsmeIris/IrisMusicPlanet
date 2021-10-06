import React from "react"
import { Grid, Button, Container } from 'semantic-ui-react'
class SoongsInList extends React.Component {


    render() {
        const props = this.props
        console.log('this is the function',props.clickedOnSong)
        return (
            <div>
                <Container onClick={() => props.clickedOnSong(props.id)}>
                
                
                <Grid>
                    <h5>{props.title}</h5>
                    <Button circular icon="play" size="medium" onClick={() => props.clickedOnSong(props.id)}></Button>
                </Grid>
                    
                    
                </Container>


            </div>

        )


    }
}
export default SoongsInList