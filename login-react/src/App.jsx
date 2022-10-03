import { HomeComponent } from './components/pages/home/HomeComponent'
import { UserProvider } from './context/dataContext'
import { Routes, Route } from 'react-router-dom'
import { FeedComponent } from './components/pages/feed/FeedComponent'




function App() {

  return (
    <UserProvider>
      <Routes>
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/" element={<HomeComponent />} />
        <Route path="/feed" element={<FeedComponent />} />
        <Route path="*" element={<HomeComponent />} />
      </Routes>
    </UserProvider>
  )
}

export default App
