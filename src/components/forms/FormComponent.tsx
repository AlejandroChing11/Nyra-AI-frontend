"use client";

import { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDropzone } from 'react-dropzone'
import { Image as ImageIcon, Loader2 } from 'lucide-react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Question {
  questionId: string;
  question: string;
}

interface FormData {
  title: string;
  description: string;
  slug: string;
  questions: Question[];
}

interface Props {
  slug: string;
}

export function FormComponent({ slug }: Props) {
  const [image, setImage] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData | null>(null)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    setImage(URL.createObjectURL(file))
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'image/*': [] } })

  // Fetch form data from API
  useEffect(() => {
    const fetchFormData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/forms/${slug}`)
        const result = await response.json()

        if (result.success) {
          setFormData(result.data)
          // Initialize answers object
          const initialAnswers: Record<string, string> = {}
          result.data.questions.forEach((q: Question) => {
            initialAnswers[q.questionId] = ''
          })
          setAnswers(initialAnswers)
        } else {
          setError(result.error || 'Error al cargar el formulario')
        }
      } catch (err) {
        setError('Error de conexión al cargar el formulario')
        console.error('Error fetching form data:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFormData()
  }, [slug])

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData) return

    // Validate that all questions are answered
    const unansweredQuestions = formData.questions.filter(
      q => !answers[q.questionId] || answers[q.questionId].trim() === ''
    )

    if (unansweredQuestions.length > 0) {
      setError('Por favor, responde todas las preguntas antes de enviar.')
      return
    }

    try {
      setIsSubmitting(true)
      setError(null)

      const response = await fetch(`/api/forms/${slug}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers,
          slug
        })
      })

      const result = await response.json()

      if (result.success) {
        // Redirect to confirmation page
        router.push(result.redirectUrl)
      } else {
        setError(result.error || 'Error al enviar el formulario')
      }
    } catch (err) {
      setError('Error de conexión al enviar el formulario')
      console.error('Error submitting form:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-100 to-teal-50">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-500" />
          <p className="text-gray-600">Cargando formulario...</p>
        </div>
      </div>
    )
  }

  if (error && !formData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-100 to-teal-50 p-4">
        <Card className="w-full max-w-md mx-auto shadow-lg bg-white">
          <CardContent className="text-center p-6">
            <p className="text-red-600 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Reintentar
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!formData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-100 to-teal-50 p-4">
        <Card className="w-full max-w-md mx-auto shadow-lg bg-white">
          <CardContent className="text-center p-6">
            <p className="text-gray-600">Formulario no encontrado</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-cyan-100 to-teal-50 p-4">
      <Card className="w-full max-w-6xl mx-auto flex flex-col md:flex-row shadow-lg bg-white">
        <div className="w-full md:w-1/3 p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <div
            {...getRootProps()}
            className={`h-full flex items-center justify-center border-2 border-dashed rounded-lg ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
              }`}
          >
            <input {...getInputProps()} />
            {image ? (
              <div className="relative w-full h-full min-h-[300px]">
                <Image
                  src={image}
                  alt="Radiografía"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ) : (
                <div className="text-center p-8">
                  <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    Arrastra y suelta la imagen de la radiografía aquí, o haz clic para seleccionar
                  </p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-2/3 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-primary">
              Formulario de {formData.title}
            </CardTitle>
            <p className="text-sm text-gray-600 text-center">
              {formData.description}
            </p>
          </CardHeader>

          <CardContent>
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {formData.questions.map((question, index) => (
                <motion.div
                  key={question.questionId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Label htmlFor={question.questionId}>
                    {question.question}
                  </Label>
                  <Input
                    id={question.questionId}
                    className="w-full mt-1"
                    value={answers[question.questionId] || ''}
                    onChange={(e) => handleAnswerChange(question.questionId, e.target.value)}
                    disabled={isSubmitting}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: formData.questions.length * 0.1 }}
              >
                <Button
                  type="submit"
                  className="w-full mt-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando Reporte...
                    </>
                  ) : (
                    'Enviar Reporte'
                  )}
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

