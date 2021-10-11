class App extends React.Component {
    state = {date: new Date()}
  
    render() {
      return (
        <div class="date">
          <p> ddd {this.state.date.toLocaleDateString()}</p>
        </div>
      );
    }
  }
  
  export default App;