import { Grid, Container } from 'semantic-ui-react'
import React from 'react'
import ListCard from '../components/ListCard'
import list from '../data/list'



class SeeAllLists extends React.Component {

    render() {
        const _self = this


        return (
            <div className="SeeAllLists">


                <div id="section4-1" className="section">

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





        )
    }
}



export default SeeAllLists
