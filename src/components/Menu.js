import React from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import AudioPlayer from "react-modular-audio-player";
import data from '../data/music'
console.log(data.songs)


class MainMenu extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            activeItem: 'home',
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    arrangePlayList(songId){
        var playList = []
        var index = 0

        for(var ii = 0; ii < data.specialRecommendation.length; ii=ii+1){
            if(songId === data.specialRecommendation[ii].id){
                index = ii
            }
        }

        for(ii = index; ii < data.specialRecommendation.length; ii = ii+1){
            playList.push(data.specialRecommendation[ii])
        }

        for(ii = 0; ii < index; ii = ii+1){
            playList.push(data.specialRecommendation[ii])
        }

        return playList
    }
    
    render() {
        console.log(this.props.currentSongId)

        var orderedList = this.arrangePlayList(this.props.currentSongId)
        
        var playerLIst = orderedList.map(function(it) {

            const processedItem = {
              src: it.fileUrl,
              title: it.title,
              artist: it.album
            }
      
            return processedItem
        })
        
        return (
            <div className="menu">
                <Menu secondary>
                        <Menu.Item
                        name='Home'
                        as={Link}
                        to="/" />
                  
                   
                        <Menu.Item
                        name='Special Recommendation'
                        as={Link}
                        to="/specialrecommendation"
                        />
                        <Menu.Item
                        name='Singers Column'
                        as={Link}
                        to="/singerscolumn"
                        />  
                    
                        <Menu.Item
                        name='See All The Lists'
                        as={Link}
                        to="/seeallthelists"
                        />
                    
                    <Menu.Menu position='right'>
                    <Menu.Item>
                        <AudioPlayer autoplay audioFiles={playerLIst}  playerWidth="30em" fontSize="1rem" iconSize="1.2rem"/>
                    </Menu.Item>
                        <Menu.Item
                            name='About Me'
                            as={Link}
                            to="/aboutme"
                        />
                    </Menu.Menu>
                </Menu>
            </div>
        )
        
    }
}


export default MainMenu