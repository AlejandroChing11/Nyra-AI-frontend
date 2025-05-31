"use client"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { HomeCardButtons } from './HomeCardButtons'
import { useFormAPI } from '@/hooks/useFormAPI'
import { Loader2 } from 'lucide-react'

interface ReportOption {
  title: string;
  iconType: string;
  slug: string;
}

export function HomeCard() {
  const [reportOptions, setReportOptions] = useState<ReportOption[]>([])
  const [hasLoaded, setHasLoaded] = useState(false)
  const { fetchAllForms, isLoading, error } = useFormAPI()

  useEffect(() => {
    if (hasLoaded) return // Evitar múltiples llamadas

    const loadForms = async () => {
      try {
        const forms = await fetchAllForms()
        // Mapear solo los campos que necesitamos para el home
        const options = forms.map(form => ({
          title: form.title,
          iconType: form.iconType,
          slug: form.slug
        }))
        setReportOptions(options)
        setHasLoaded(true)
      } catch (err) {
        console.error('Error loading forms:', err)
      }
    }

    loadForms()
  }, [fetchAllForms, hasLoaded])

  if (isLoading && !hasLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-100 to-teal-50 p-4 sm:p-8">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-500" />
          <p className="text-gray-600">Cargando opciones...</p>
        </div>
      </div>
    )
  }

  if (error && !hasLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-100 to-teal-50 p-4 sm:p-8">
        <Card className="w-full max-w-lg sm:max-w-md shadow-lg bg-white rounded-lg">
          <CardContent className="text-center p-6">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => {
                setHasLoaded(false)
                setReportOptions([])
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Reintentar
            </button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-100 to-teal-50 p-4 sm:p-8">
      <Card className="w-full max-w-lg sm:max-w-md shadow-lg bg-white rounded-lg">
        <CardHeader className="text-gray-600 font-medium">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardTitle className="text-2xl sm:text-3xl font-bold text-center text-primary">
              ¡Bienvenido a Nyra AI!
            </CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent>
          <motion.p
            className="text-center text-muted-foreground mb-6 text-sm sm:text-base text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            ¿Qué deseas reportar hoy?
          </motion.p>
          <div className="flex flex-col gap-4">
            {reportOptions.map((option, index) => (
              <HomeCardButtons key={option.title} option={option} index={index} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
