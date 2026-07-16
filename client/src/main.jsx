import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {ThemeProvider} from "./context/ThemeContext.jsx"
import { AuthProvider } from './context/AuthContext.jsx';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
          <ThemeProvider>
            <Toaster richColors/>
              <App />
          </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
)
