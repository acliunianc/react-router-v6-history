import { createBrowserHistory } from 'history'
import { useState } from 'react'
import { Route, Router, Routes, useNavigate } from 'react-router'

const history = createBrowserHistory()
const Home = () => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        navigate('/about')
      }}
    >
      Home
    </div>
  )
}

const App = () => {
  const [, forceUpdate] = useState({})
  history.listen(() => {
    forceUpdate({})
  })

  return (
    <Router
      location={history.location}
      navigator={history}
    >
      <Routes>
        <Route
          path='/home'
          element={<Home />}
        />
        <Route
          path='/about'
          element={
            <div
              onClick={() => {
                history.push('/home')
              }}
            >
              About
            </div>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
