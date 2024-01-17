import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 导入自己的BrowserRouter组件 */}
    <App />
  </React.StrictMode>
)
