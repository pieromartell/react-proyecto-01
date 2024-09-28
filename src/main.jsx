import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GIfExpertApp } from './GIfExpertApp'

import './style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GIfExpertApp></GIfExpertApp>
  </StrictMode>,
)
