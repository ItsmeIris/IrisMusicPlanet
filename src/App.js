
import React from 'react'
import HomePage from './screens/Home'
import MainMenu from './components/Menu'

import './styles/main.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SpecialRecommendation from './screens/SpecialRe';

import {Container} from 'semantic-ui-react'
import SingersColumn from './screens/SingersCo';
import SeeAllLists from './screens/SeeAll';
import AboutMe from './screens/aboutMe';
import Artist from './screens/Artist'



class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      currentSongId: 21
    }
    this.clickedOnSong = this.clickedOnSong.bind(this)
    
  
  }

  clickedOnSong(songId){

    this.setState({
      currentSongId: songId
    }, function() {
      console.log(Document)
      const playButton = document.getElementById('play')
      playButton.click()
    })
  }

  

  render(){
    console.log(this.state)

    return(
    
    <Router>
      <div className="APP">
          <div id="section1" className="section">
                <Container>
                  <MainMenu currentSongId={this.state.currentSongId}/>
                </Container>
          </div> 
            <Switch>
            {/* <Route exact  path="/specialrecommendation" component={SpecialRecommendation}/> */}
            <Route exact  path="/specialrecommendation" render={(props)=>(<SpecialRecommendation {...props} clickedOnSong={this.clickedOnSong}/>)}/>
            <Route exact  path="/singerscolumn" component={SingersColumn}/>
            <Route exact  path="/seeallthelists" render={(props)=>(<SeeAllLists {...props} clickedOnSong={this.clickedOnSong}/>)}/>
            <Route exact  path="/aboutme" component={AboutMe}/>
            <Route exact  path="/artist/:id" component={Artist}/>
            <Route exact  path="/" component={HomePage}/>
            </Switch>
      </div>
      

      
      
    </Router>
        
        
        
      
      
    
    )
  }
}



export default App





