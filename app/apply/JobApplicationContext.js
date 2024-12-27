"use client";

import React, { createContext, useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const JobApplicationContext = createContext();

export const JobApplicationProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });

  const submitApplication = async (data) => {
    setLoading(true);
    setAlert({ type: '', message: '' });

    // Check if file size is greater than 5 MB
    if (data.file && data.file.size > 5000000) { // 5000000 bytes (5 MB)
      setLoading(false);
      setAlert({
        type: 'error',
        message: 'File size should not exceed 5 MB.'
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('role', data.role);
      formData.append('level', data.level);
      if (data.file) {
        formData.append('resume', data.file);
      }
      formData.append('message', data.message);

      const response = await fetch(process.env.NEXT_PUBLIC_APPLY_END_POINT, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setAlert({ type: 'success', message: 'Application submitted successfully!' });
      } else {
        const errorData = await response.json();
        console.log(errorData.email[0])
        setAlert({ type: 'error', message: errorData.email[0] || 'Submission failed.' });
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
    <JobApplicationContext.Provider value={{ loading, alert, submitApplication, setAlert }}>
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
    </JobApplicationContext.Provider>
  );
};