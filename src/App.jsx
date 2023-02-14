import Stars from './components/Stars/Stars';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="film-card">
        <div className="film-card__img">250х250</div>
        <div className="film-card__info">
          <p className="film-card__title">
            Название фильма
          </p>
          <Stars count={1}/>
        </div>
      </div>
    </div>
  )
}

export default App
