"use client";

import React, { createContext, useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const AdvisorsContext = createContext();

export const AdvisorsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });

  const submitAdvisor = async (data) => {
    setLoading(true);
    setAlert({ type: '', message: '' });

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_ADVISORS_END_POINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setAlert({ type: 'success', message: 'Advisor application submitted successfully!' });
      } else {
        const errorData = await response.json();
        setAlert({ type: 'error', message: errorData.message || 'Submission failed.' });
      }
    } catch (error) {
      console.error(error);
      setAlert({ type: 'error', message: 'An unexpected error occurred.' });
    } finally {
      setLoading(false);
    }
  };

  const CustomAlert = ({ type, message, onClose }) => {
    return (
      <Alert className={type === 'success' ? 'bg-green-200 text-green-900' : 'bg-red-200 text-red-900'} variant={type === 'success' ? 'success' : 'destructive'}>
        <AlertTitle>{type === 'success' ? 'Success' : 'Error'}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </Alert>
    );
  };

  return (
    <AdvisorsContext.Provider value={{ loading, alert, submitAdvisor, setAlert }}>
      {alert.message && (
        <div className="fixed top-4 right-4 z-50">
          <CustomAlert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert({ type: '', message: '' })}
          />
        </div>
      )}
      {children}
    </AdvisorsContext.Provider>
  );
};
