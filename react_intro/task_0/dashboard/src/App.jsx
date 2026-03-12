import image3 from './assets/holberton-logo.jpg';
import './App.css';

const App = () => {
  const date = new Date();
  return (
    <>
      <div className="App-header">
        <img src={image3} alt='holberton logo' style={{ width: '300px', height: '350px' }} />
        <h1 style={{ color: '#e1003c' }}>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p>Copyright {date.getFullYear()} - holberton School</p>
      </div>
    </>
  )
}

export default App