'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
  
import React from 'react'

const Page = () => {

    const FormSchema = z.object({
        question_type: z.string(),
        name: z.string(),
        email: z
          .string({
            required_error: "Please inter a valid email.",
          }).email(),
        message: z.string()
      })
        const form = useForm<z.infer<typeof FormSchema>>({
          resolver: zodResolver(FormSchema),
          defaultValues: {
            question_type:"",
            name: "",
            email: '',
            message: ''
          },
        })
        function onSubmit(data: z.infer<typeof FormSchema>) {
            console.log("intered")
            console.log(data)
          }
       
  return (
    <main className='w-full h-full max-w-4xl md:px-4 sm:px-12 px-6 mx-auto'>
     <div className='max-w-4xl w-fit mx-auto py-10 space-y-3 mt-16'>
        <h1 className='text-5xl font-semibold text-center'>Questions&#x3f; Let&#xb4;s Talk</h1>
        <p className='text-xl text-neutral-400 text-center'>
        Want to learn more about Maazi&#x2c; get a quote&#x2c; or speak with an expert&#x3f; Let us know what you are looking for and we&#xb4;ll get back to you right away
        </p>
    </div>
    <section className='space-y-12'>
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-12">
        <FormField
          control={form.control}
          name="question_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold text-lg md:text-xl px-1 text-neutral-700'>This question is about&#x3a;</FormLabel>
              <p className='text-neutral-600 text-sm md:text-base px-1'>Choose a topic&#x2c; so we know who to send your request to&#x3a;</p>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='p-5 md:p-7 text-base md:text-lg mt-1 w-full'>
                    <SelectValue placeholder="This question is about..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="register-authorising">Registering/Authorising</SelectItem>
                  <SelectItem value="using-application">Using Application</SelectItem>
                  <SelectItem value="troubleshooting">Troubleshooting</SelectItem>
                  <SelectItem value="backup-restore">BackUp/Restore</SelectItem>
                  <SelectItem value="others">others</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold text-lg md:text-xl px-1 text-neutral-700'>Your Name&#x3a;</FormLabel>
              <p className='text-neutral-600 text-sm md:text-base px-1'>Please enter your real name&#x3a;</p>
              <Input {...field} className='p-5 md:p-7 text-base md:text-lg mt-1 w-full' placeholder='Enter your name' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold text-lg md:text-xl px-1 text-neutral-700'>Your Email Address&#x3a;</FormLabel>
              <p className='text-neutral-600 px-1 text-sm md:text-base'>Please carefully check your email address for accuracy&#x3a;</p>
              <Input {...field} className='p-5 md:p-7 text-base md:text-lg mt-1 w-full' placeholder='Enter your email' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold text-lg md:text-xl px-1 text-neutral-700'>Explain your question in details&#x3a;</FormLabel>
              <p className='text-neutral-600 px-1 text-sm md:text-base'>Your OS version, Martex version & build, steps you did. Be VERY precise!</p>
            <Textarea {...field} rows={6} className='p-5 md:p-7 text-base md:text-lg mt-1 w-full' placeholder='Enter your message...' />
            </FormItem>
          )}
        />

        <Button type='submit' className='p-7'>
            Submit Request
    </Button>
    </form>
        </Form>
        <p className='text-neutral-400'>
            We are committed to your privacy. Martex uses the information you provide us to contact you about our relevant content&#x2c; products&#x2c; and services. You may unsubscribe from these communications at any time. For more information&#x2c; check out our <span className='text-neutral-700 font-semibold'>Privacy Policy</span>. 
        </p>
    </section>
    <section className='flex flex-col lg:flex-row justify-between gap-16 items-center py-24 px-2 md:px-0'>
            <h1 className='text-4xl text-center font-semibold md:text-3xl xl:text-4xl md:text-start text-neutral-600'>Stay up to date with our news, ideas and updates</h1>
            <div className='flex flex-col sm:flex-row gap-4 w-full max-w-2xl '>
                <Input
                placeholder='Enter your Email'
                 className='py-6 md:py-8 px-12 border-2  text-xl' />
                <Button className='p-6 md:p-8 '>Subscribe</Button>
            </div>
         </section>
    
    
    </main>
  )
}

export default Page
