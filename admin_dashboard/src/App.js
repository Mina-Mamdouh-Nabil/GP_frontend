import './App.css'; 

function App() {
  return(
 <div className="App">
   <h1 className='Welcome_message'>Welcme to the Admin Dashboard</h1>
   <button className='Managing_buttons'>
    <span role="img" aria-label="user">👤</span> Managing Users
   </button>
   <button className='Managing_buttons'>
    <span role="img" aria-label="monument">⛩️</span> Managing Monuments
   </button>
 </div>
  )
 }

export default App;
