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
import React, { useContext } from 'react';
import { AdvisorsContext } from "./AdvisorsContext";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  expertise: z.string().min(3, {
    message: "Expertise must be at least 3 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function AdvisorsForm() {
  const { loading, alert, submitAdvisor, setAlert } = useContext(AdvisorsContext);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      expertise: "",
      message: "",
    },
  });

  const onSubmit = async (values) => {
    await submitAdvisor(values);
    if (alert.type === 'success') {
      form.reset();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-full items-center justify-center gap-8 p-4 md:pt-40">
      {/* Left Side - Form */}
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Join as an Advisor</CardTitle>
          <CardDescription>
            Please fill in the form below to express your interest.
          </CardDescription>
        </CardHeader>
        <CardContent>
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
                name="expertise"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expertise</FormLabel>
                    <FormControl>
                      <Input placeholder="Your field of expertise" {...field} />
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
                        placeholder="Why do you want to join as an advisor?"
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
        <Card className="w-full p-6 border-none ">
          <CardContent>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              <h2 className="text-2xl font-bold mb-4">We are seeking advisors!</h2>
              If you have passion, courage, and ideas to share, we want you. Whether you bring fresh concepts or insights into our existing products, your input can guide and inspire us.
            </blockquote>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              We're open to sharing knowledge, resources, and opportunities based on mutual agreement. Whether it's through collaboration, intensive exchange, or tailored contributions, we’ll ensure you feel valued as an integral part of our mission to create change. Let’s grow together!
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
