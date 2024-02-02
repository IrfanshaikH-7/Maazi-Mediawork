import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from 'next/link';
import { Button } from '../ui/button';
const QnA: { question: string; answer: string }[] = [
    {
        question: "1. Getting started with Maazi",
        answer: 'Etiam amet mauris suscipit in odio integer congue metus and vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna suscipit luctus blandit and laoreet '
    },
    {
        question: "2. What's inside the package?",
        answer: 'Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus dolor luctus '
    },

    {
        question: "3. How do I choose a plan?",
        answer: 'Etiam amet mauris suscipit in odio integer congue metus and vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna suscipit luctus blandit and laoreet '
    },
    {
        question: "4. How Maazi handle my privacy?",
        answer: 'Etiam amet mauris suscipit in odio integer congue metus and vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna suscipit luctus blandit and laoreet '
    },
    {
        question: "5. I have an issue with my account",
        answer: 'Etiam amet mauris suscipit in odio integer congue metus and vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna suscipit luctus blandit and laoreet '
    },
    {
        question: "6. Can I cancel at anytime?",
        answer: 'Etiam amet mauris suscipit in odio integer congue metus and vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna suscipit luctus blandit and laoreet '
    },

]
const QandA = () => {
  return (
    <main className='py-12'>
      <div className='max-w-4xl w-fit mx-auto py-10 space-y-3'>
            <h1 className='text-3xl md:text-5xl font-semibold text-center'>Questions &#x26; Answers</h1>
            <p className='md:text-xl text-neutral-600 text-center'>Ligula risus aucor tempus magna feugiat lacinia</p>
        </div>
        <div>
        <Accordion type="single" collapsible>
                {
                    QnA.map((qna, idx) => (
                        <AccordionItem value={`item-${idx}`} className=''>
                  <AccordionTrigger className='test-base font-semibold px-2 md:text-2xl rounded-md hover:no-underline text-neutral-700 truncate ...'>
                    {qna.question}
                  </AccordionTrigger>
                  <AccordionContent className='px-8 text-sm md:text-xl text-neutral-500'>
                    {qna.answer}
                  </AccordionContent>

                        </AccordionItem>
                    ))
                }
              </Accordion>
        </div>
        <div className='w-fit mx-auto mt-12 py-4 px-16 border rounded-3xl bg-neutral-50'>
            Have any questions&#x3f;{' '}
            <Link href={'#'} className='text-neutral-700 font-semibold hover:underline transition-all'>Get in touch</Link>
        </div>
        
    </main>
  )
}

export default QandA
