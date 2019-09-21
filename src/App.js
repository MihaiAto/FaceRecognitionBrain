import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'
import Navigation from './Components/Navigation/Navigation';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank.js';
import './App.css';

const app = new Clarifai.App({
  apiKey: '44ef7c4e923e49ddaefda719208a9fb0'
 });

const particlesOptions = {
     particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          value_area:1000
          
        }
      }
    }
  }   

class App extends Component {
     constructor (){
       super()
       this.state = {
           input:'',
           imageUrl: ''

         }
       }   
    }

onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

onButtonSubmit =() =>{
    this.setState({imageUrl: input})
    app.models.predict(
       Clarifai.FACE_DETECT_MODEL,
       this.state.input)
       .then(
       function(response) {
         console.log (response.outputs[0].data.regions[0].region_info.bounding_box)
      // do something with response
    },
    function(err) {
      // there was an error
    }
  );
 }
}
render() {

  return (
    <div className="App">
      <Particles  className = 'particles'
                params={particlesOptions}
          />
      
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm
       onInputChange={this.onInputChage} 
       onButtonSubmit={this.onButtonSubmit}

       />
       <FaceRecognition imageUrl={this.state.imageUrl}/>
     
    </div>
  );
}
}  
  
export default App;
