"use client";

import { useState } from "react";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Move schema inside the component to ensure it only runs on client
export default function JobApplicationForm() {
  // Define the schema inside the component
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    role: z.string().min(1, { message: "Please select a role." }),
    level: z.string().min(1, { message: "Please select a level." }),
    file: typeof File === "undefined" 
      ? z.any() 
      : z.instanceof(File)
          .refine((file) => file.type === "application/pdf", {
            message: "Only PDF files are allowed.",
          })
          .optional(),
    message: z.string().min(10, {
      message: "Message must be at least 10 characters.",
    }),
  });

  const [submitted, setSubmitted] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      level: "",
      file: undefined,
      message: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-full items-center justify-center gap-8 p-4 md:pt-20">
      {/* Left Side - Form */}
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Apply for a Job</CardTitle>
          <CardDescription>
            Please fill in the form below to submit your application.
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
                      <Input placeholder="Enter your name" value={field.value || ""} {...field} />
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
                        value={field.value || ""}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value || ""}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="frontend">Frontend (React)</SelectItem>
                          <SelectItem value="backend">Backend (Django)</SelectItem>
                          <SelectItem value="data-engineer">Data Engineer</SelectItem>
                          <SelectItem value="flutter">Mobile(flutter)</SelectItem>
                          <SelectItem value="devops">DevOps</SelectItem>
                          <SelectItem value="geoai">GeoAI</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Level</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value || ""}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="intern">Intern</SelectItem>
                          <SelectItem value="associate">Associate</SelectItem>
                          <SelectItem value="midlevel">Midlevel</SelectItem>
                          <SelectItem value="experienced">Experienced</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload Resume</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="application/pdf"
                        onChange={(e) => field.onChange(e.target.files[0])}
                      />
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
                        placeholder="Tell us why you're a great fit"
                        className="min-h-[120px] resize-none"
                        value={field.value || ""}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full sm:w-auto">
                Submit Application
              </Button>
            </form>
          </Form>
          {submitted && <p className="mt-4 text-green-500">Application submitted successfully!</p>}
        </CardContent>
      </Card>

      {/* Right Side - Quote */}
      <div className="w-full max-w-lg flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <Card className="w-full p-6 border-none">
          <CardContent>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
              Explore opportunities to grow your career with us. Your skills and passion can make a difference.
            </blockquote>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              We believe in fostering talent and creating a collaborative environment for everyone. Apply today and be part of our journey!
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}