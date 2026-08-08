import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {ThemeProvider} from "./context/ThemeContext"
import { AuthProvider } from './context/AuthContext';
import { TooltipProvider } from './components/ui/tooltip';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
          <ThemeProvider>
            <TooltipProvider>
            <Toaster richColors/>
              <App />
            </TooltipProvider>
          </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
)
