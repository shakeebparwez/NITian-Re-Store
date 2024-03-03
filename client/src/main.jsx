import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider 
      theme={{
        components : {
          Button : {
            colorPrimary : '#CF2E2E',
            colorPrimaryHover : '#CF2E2E',
            borderRadius : '2px',
            boxShadow : 'none',
          }
        },
        token : {
          borderRadius : '2px',
          colorPrimary : '#CF2E2E',
        },
    }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
