// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. This defines a state object in the App class
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. This method is tied to an onChange DOM event specified later in the code. This robot method will change the userInput as the user inputs data into the input section of the page 
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3. This is a simple destructuring of the userInput variable inside the state object of the App class. This allows for quicker access to the userInput without having to write this.state over and over again.
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. This links the DOM event of onChange to the robot() method. */}
          onChange={ this.robot }
          {/* 5. This specifies what the value is for the input tag. this needs to be specified in order for data to be eventually submitted.  */}
          value={ userInput }
        />

        <div>
          {/* 6. This is calling an instance of the class GoodRobot to be rendered on the page. */}
          <GoodRobot
            {/* 7. This is passing App's state object property of userInput to be accessible to the GoodRobot class as a prop. */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. Render can only have one parent container, which is why everything is wrapped in a div.
      <div>
        <h3>Good Robot</h3>
        {/* 9. Text will be directly rendered on the page. The most updated userInput from state from App.js will be added where specified. The text will be able to be dinamically changed as the user puts text into the input field */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. All classes need an export. This will allow App.js to access the information in GoodRobot.js.
export default GoodRobot
