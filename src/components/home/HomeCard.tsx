"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Image, FileSpreadsheet, Bone, Stethoscope } from 'lucide-react'

export function HomeCard() {
  const [isVisible, setIsVisible] = useState(false)

  const reportOptions = [
    { title: 'Radiografía abdominal', icon: <Image className="mr-2 h-4 w-4" /> },
    { title: 'Enema opaco', icon: <FileSpreadsheet className="mr-2 h-4 w-4" /> },
    { title: 'Radiografía de hueso', icon: <Bone className="mr-2 h-4 w-4" /> },
    { title: 'Radiografía de tórax', icon: <Stethoscope className="mr-2 h-4 w-4" /> },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-100 to-teal-50 p-4">
      <Card className="w-full max-w-md shadow-lg bg-white">
        <CardHeader className='text-gray-500 font-medium'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardTitle className="text-2xl font-bold text-center text-primary">
              ¡Bienvenido a Camlive!
            </CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent>
          <motion.p
            className="text-center text-muted-foreground mb-6 text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            ¿Qué deseas reportar hoy?
          </motion.p>
          <div className="grid gap-4">
            {reportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              >
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal text-white-100 hover:bg-slate-300 hover:text-slate-500 transition-colors duration-200"
                >
                  {option.icon}
                  {option.title}
                </Button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
