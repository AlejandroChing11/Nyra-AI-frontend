"use client"
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { FileSpreadsheet, Bone, Stethoscope } from 'lucide-react'
import { HomeCardButtons } from './HomeCardButtons'

export function HomeCard() {

  const reportOptions = [
    { title: 'Radiografía abdominal', icon: <Stethoscope className="mr-2 h-4 w-4" /> },
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
              ¡Bienvenido a Nyra AI!
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
              <HomeCardButtons key={option.title} option={option} index={index} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
