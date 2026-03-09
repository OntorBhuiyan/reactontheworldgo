import './App.css';
import { Suspense } from 'react';
import Countries from './components/countries/countries.jsx';

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  )
}

export default App
