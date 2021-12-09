import './App.css';
import * as React from 'react'
// import Home from '@pages/Home'
// import Contact from '@pages/Contact'
// import Article from '@pages/Article';
import { Routes, Route, Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@pages/Home'))
const Contact = React.lazy(() => import('@pages/Contact'))
const Article = React.lazy(() => import('@pages/Article'))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <React.Suspense  fallback={<>...</>}><Navigate to="/work" replace={true} /></React.Suspense>  
        } 
        />
        <Route path="/work" element={<React.Suspense  fallback={<>...</>}><Home /></React.Suspense>} />
        <Route path="/contact" element={<React.Suspense  fallback={<>...</>}><Contact /></React.Suspense>} />
        <Route path="/article" element={<React.Suspense  fallback={<>...</>}><Article /></React.Suspense>} />
      </Routes>
    </div>
  );
}

export default App;