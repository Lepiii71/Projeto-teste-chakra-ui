"use client"
import { Inter } from 'next/font/google'
import {  ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/app/Components/navbar'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <body> 
        <ChakraProvider>
          <Navbar />
        {children}
        </ChakraProvider>
      </body>
      </head>
    </html>
  )
}
