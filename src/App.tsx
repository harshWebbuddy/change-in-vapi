import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import SignIn from './pages/signin';
import FreeTrial from './pages/free-trial';
import Dashboard from './pages/Dashboard';
import PhoneNumber from './pages/PhoneNumber';
import Files from './pages/Files';
import Logs from './pages/Logs';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/free-trial" element={<FreeTrial />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/phone-number" element={<PhoneNumber />} />
            <Route path="/files" element={<Files />} />
            <Route path="/logs" element={<Logs />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
