"use client";

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDropzone } from 'react-dropzone'
import { Image } from 'lucide-react'
import { FORMS } from '@/data/FORMS';

interface Props {
  slug: string;
}

export function FormComponent({ slug }: Props) {

  const [image, setImage] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    setImage(URL.createObjectURL(file))
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'image/*': [] } })

  const form = FORMS.find(form => form.slug === slug)

  if (!form) {
    return (
      <div>
        Formulario no encontrado
      </div>
    )
  }

  const { title, questions } = form;

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-cyan-100 to-teal-50 p-4">
      <Card className="w-full max-w-6xl mx-auto flex flex-col md:flex-row shadow-lg bg-white">
        {/* <h1>Radiografia</h1> */}
        <div className="w-full md:w-1/3 p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <div
            {...getRootProps()}
            className={`h-full flex items-center justify-center border-2 border-dashed rounded-lg ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
              }`}
          >
            <input {...getInputProps()} />
            {image ? (
              <img src={image} alt="Radiografía" className="max-w-full max-h-full object-contain" />
            ) : (
              <div className="text-center">
                <Image className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">Arrastra y suelta la imagen de la radiografía aquí, o haz clic para seleccionar</p>
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-2/3 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-primary">
              Formulario de {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {questions.map((question, index) => (
                <motion.div
                  key={question.questionId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Label htmlFor={question.questionId}>{question.question}</Label>
                  <Input id={question.questionId} className="w-full mt-1" />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: questions.length * 0.1 }}
              >
                <Button type="submit" className="w-full mt-6">Enviar Reporte</Button>
              </motion.div>
            </form>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

