import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import './App.css'
import DataFetchingComponent from './app/DataFetchingComponent'

function App() {
  const [apiUrl, setApiUrl] = useState('https://jsonplaceholder.typicode.com/posts');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="my-5 flex flex-col items-center">
        <label htmlFor="apiUrl" className="mb-2 text-lg font-medium">Test an API Endpoint:</label>
        <input
          type="text"
          id="apiUrl"
          value={apiUrl}
          onChange={(e) => setApiUrl(e.target.value)}
          className="shadow appearance-none border rounded py-2 px-3 text-grey-darker mb-3"
          placeholder="Enter API URL"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Fetch Data
        </button>
      </form>
      <DataFetchingComponent apiUrl={apiUrl} />
    </>
  )
}

export default App
