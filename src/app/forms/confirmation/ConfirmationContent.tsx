"use client";

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle, FileText, Clock } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ConfirmationContent() {
  const searchParams = useSearchParams();
  const submissionId = searchParams.get('id');
  const formSlug = searchParams.get('form');

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-green-50 via-emerald-100 to-teal-50 p-4">
      <Card className="w-full max-w-2xl mx-auto my-auto shadow-lg bg-white">
        <CardHeader className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mx-auto mb-4"
          >
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CardTitle className="text-3xl font-bold text-green-700 mb-2">
              ¡Formulario Enviado Exitosamente!
            </CardTitle>
            <p className="text-gray-600 text-lg">
              Tu reporte ha sido procesado correctamente
            </p>
          </motion.div>
        </CardHeader>

        <CardContent className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 p-4 rounded-lg"
          >
            <div className="flex items-center space-x-3 mb-3">
              <FileText className="h-5 w-5 text-blue-500" />
              <span className="font-semibold text-gray-700">Detalles del Envío</span>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>ID de Envío:</span>
                <span className="font-mono font-medium">{submissionId}</span>
              </div>
              <div className="flex justify-between">
                <span>Tipo de Formulario:</span>
                <span className="font-medium">{formSlug}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Fecha de Envío:</span>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">
                    {new Date().toLocaleString('es-ES')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-blue-50 p-4 rounded-lg border border-blue-200"
          >
            <h3 className="font-semibold text-blue-800 mb-2">¿Qué sigue?</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Tu reporte será procesado por nuestro sistema de IA</li>
              <li>• Recibirás un análisis detallado en tu dashboard</li>
              <li>• El proceso puede tomar entre 5-10 minutos</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 pt-4"
          >
            <Button asChild className="flex-1">
              <Link href="/">
                Volver al Inicio
              </Link>
            </Button>

            <Button variant="outline" asChild className="flex-1">
              <Link href="/forms">
                Nuevo Formulario
              </Link>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
