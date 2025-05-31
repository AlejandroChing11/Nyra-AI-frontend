import { useState, useCallback } from 'react'

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

interface FormSummary {
  title: string;
  description: string;
  slug: string;
  questionCount: number;
  iconType: string;
}

interface SubmissionResponse {
  success: boolean;
  message: string;
  submissionId: string;
  redirectUrl: string;
}

export function useFormAPI() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchForm = useCallback(async (slug: string): Promise<FormData | null> => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch(`/api/forms/${slug}`)
      const result = await response.json()

      if (result.success) {
        return result.data
      } else {
        setError(result.error || 'Error al cargar el formulario')
        return null
      }
    } catch (err) {
      setError('Error de conexión al cargar el formulario')
      console.error('Error fetching form:', err)
      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchAllForms = useCallback(async (): Promise<FormSummary[]> => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch('/api/forms')
      const result = await response.json()

      if (result.success) {
        return result.data
      } else {
        setError(result.error || 'Error al cargar los formularios')
        return []
      }
    } catch (err) {
      setError('Error de conexión al cargar los formularios')
      console.error('Error fetching forms:', err)
      return []
    } finally {
      setIsLoading(false)
    }
  }, [])

  const submitForm = useCallback(async (
    slug: string,
    answers: Record<string, string>
  ): Promise<SubmissionResponse | null> => {
    try {
      setIsLoading(true)
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
        return result
      } else {
        setError(result.error || 'Error al enviar el formulario')
        return null
      }
    } catch (err) {
      setError('Error de conexión al enviar el formulario')
      console.error('Error submitting form:', err)
      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  const clearError = useCallback(() => setError(null), [])

  return {
    isLoading,
    error,
    fetchForm,
    fetchAllForms,
    submitForm,
    clearError
  }
}
