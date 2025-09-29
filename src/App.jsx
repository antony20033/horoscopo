import { useState } from 'react'
import { getZodiacSign, parseDate } from './zodiacData'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [zodiacSign, setZodiacSign] = useState(null)
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!name.trim()) {
      newErrors.name = 'Por favor, introduce tu nombre'
    }

    if (!birthDate.trim()) {
      newErrors.birthDate = 'Por favor, introduce tu fecha de nacimiento'
    } else {
      const parsedDate = parseDate(birthDate)
      if (!parsedDate) {
        newErrors.birthDate = 'Formato de fecha inválido. Usa dd/mm/yyyy'
      } else {
        const sign = getZodiacSign(parsedDate)
        setZodiacSign(sign)
      }
    }

    setErrors(newErrors)
  }

  const handleDateChange = (e) => {
    let value = e.target.value.replace(/[^\d]/g, '') 
    
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2)
    }
    if (value.length >= 5) {
      value = value.substring(0, 5) + '/' + value.substring(5, 9)
    }
    
    setBirthDate(value)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Horóscopo</h1>
        <p>Descubre tu signo zodiacal</p>
      </header>

      <main className="app-main">
        <div className="container">
          {/* Formulario */}
          <div className="input-section">
            <form onSubmit={handleSubmit} className="horoscope-form">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Introduce tu nombre"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="birthDate">Fecha de Nacimiento</label>
                <input
                  type="text"
                  id="birthDate"
                  value={birthDate}
                  onChange={handleDateChange}
                  placeholder="dd/mm/yyyy"
                  maxLength="10"
                  className={errors.birthDate ? 'error' : ''}
                />
                {errors.birthDate && <span className="error-message">{errors.birthDate}</span>}
              </div>

              <button type="submit" className="submit-btn">
                Ver mi signo
              </button>
            </form>
          </div>

          {/* Resultado */}
          <div className="result-section">
            {zodiacSign ? (
              <div className="zodiac-result">
                <h2>{name}, tu signo es {zodiacSign.name}</h2>
                <div className="zodiac-symbol">{zodiacSign.image}</div>
                <p><strong></strong> {zodiacSign.element}</p>
                <p className="description">{zodiacSign.description}</p>
              </div>
            ) : (
              <div className="placeholder">
                <p>Introduce tu nombre y fecha de nacimiento para descubrir tu signo zodiacal</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>

  )
}

export default App
