"use client";

import React, { createContext, useState } from 'react';

export const ContactContext = createContext();

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


export const ContactProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });

  const submitContact = async (data) => {
    setLoading(true);
    setAlert({ type: '', message: '' });
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_END_POINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(data)
      if (response.ok) {
        console.log(response.json)
        setAlert({ type: 'success', message: 'Contact submitted successfully!' });
      } else {
        const errorData = await response.json();
        setAlert({ type: 'error', message: errorData.message || 'Submission failed.' });
      }
    } catch (error) {
        console.log(error)
      setAlert({ type: 'error', message: 'An unexpected error occurred.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContext.Provider value={{ loading, alert, submitContact, setAlert }}>
        
      {children}
    </ContactContext.Provider>
  );
};