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
            borderRadius : '0px',
          }
        }
    }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
