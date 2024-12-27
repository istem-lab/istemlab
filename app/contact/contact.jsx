"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { Button } from "@/components/ui/button";



import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useContext } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import Link from "next/link";
import { ContactContext } from './ContactContext';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";




const CustomAlert = ({ type, message, onClose }) => {
  
  return (
    <Alert variant={type === 'success' ? 'success' : 'destructive'}>
      <AlertTitle>{type === 'success' ? 'Success' : 'Error'}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
      <Button variant="ghost" size="icon" onClick={onClose}>
        <X className="w-4 h-4" />
      </Button>
    </Alert>
  );
};







const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(3, {
    message: "Subject must be at least 3 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});



















export default function ContactForm() {

  const { loading, alert, submitContact } = useContext(ContactContext);



  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values) => {
    await submitContact(values);
    if (!alert.type) {
      form.reset();
    }
  };


  return (
    <div className="flex flex-col lg:flex-row min-h-full items-center justify-center gap-8 p-4 md:pt-40">
    {/* Left Side - Form */}
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Contact Us</CardTitle>
        <CardDescription>
          Please fill in the form below to get in touch.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {alert.message && (
          <Alert className={type === 'success' ? 'bg-green-200 text-green-900' : 'bg-red-200 text-red-900'} variant={alert.type === 'success' ? 'success' : 'destructive'}>
            <AlertTitle>
              {alert.type === 'success' ? 'Success' : 'Error'}
            </AlertTitle>
            <AlertDescription>{alert.message}</AlertDescription>
          </Alert>
        )}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Subject of your message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      className="min-h-[120px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>

    {/* Right Side - Quote */}
    <div className="w-full max-w-lg flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
      <Card className="w-full p-6 border-none">
        <CardContent>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            <h2 className="text-2xl font-bold mb-4">Let’s Connect!</h2>
            Your feedback, questions, and ideas matter to us. Reach out and let’s build something amazing together.
          </blockquote>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            Collaboration sparks innovation. We value every opportunity to grow, learn, and create with you.
          </blockquote>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            Phone: +9779864271337
          </blockquote>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            Location: <a href="https://maps.app.goo.gl/xbqPRKRnmUMD3f4u9" target="_blank" rel="noopener noreferrer" className="underline">click here</a>
          </blockquote>
        </CardContent>
      </Card>
    </div>
  </div>
  );
}
