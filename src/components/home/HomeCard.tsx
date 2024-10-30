"use client"
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { HomeCardButtons } from './HomeCardButtons'
import { FORMS } from '@/data/FORMS'

export function HomeCard() {

  //return only title, icon and slug
  const reportOptions = FORMS.map(({ title, icon, slug }) => ({ title, icon, slug }))

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
