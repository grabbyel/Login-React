import { HomeComponent } from './components/pages/home/HomeComponent'
import { useState } from 'react'



function App() {
  const storage = localStorage.getItem('user')
  const [user, setUser] = useState(storage)

  return (
    <>
      {storage ?? <HomeComponent />}
    </>
  )
}

export default App
