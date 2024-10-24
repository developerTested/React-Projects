import Rating from './Rating'
import './App.css'

function App() {

  return (
    <>
      <h1>Star Rating</h1>

      <Rating stars={5} />

      <Rating stars={10} />

    </>
  )
}

export default App
