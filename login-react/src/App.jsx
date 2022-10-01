import { HomeComponent } from './components/pages/home/HomeComponent'
import { useState } from 'react'
import { UserProvider } from './context/dataContext'
import { Routes, Route } from 'react-router-dom'
import { FeedComponent } from './components/pages/feed/FeedComponent'




function App() {
  const storage = localStorage.getItem('user')
  const [user, setUser] = useState(storage)

  return (
    <>
      {storage ?? <HomeComponent />}
      <UserProvider>
        <Routes>
          <Route path="*" element={<HomeComponent />} />
          <Route path="*" element={<HomeComponent />} />
          <Route path="home" element={<HomeComponent />} />
          <Route path="feed" element={<FeedComponent />} />
        </Routes>
      </UserProvider>
    </>
  )
}

export default App
