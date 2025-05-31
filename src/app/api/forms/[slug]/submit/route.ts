import { NextRequest, NextResponse } from 'next/server';
import { FORMS } from '@/data/FORMS';

interface SubmissionData {
  answers: Record<string, string>;
  slug: string;
  submittedAt?: string;
}

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const body = await request.json();

    // Verificar que el formulario existe
    const form = FORMS.find(form => form.slug === slug);

    if (!form) {
      return NextResponse.json(
        { error: 'Formulario no encontrado' },
        { status: 404 }
      );
    }

    // Validar que se enviaron respuestas
    if (!body.answers || typeof body.answers !== 'object') {
      return NextResponse.json(
        { error: 'Las respuestas son requeridas' },
        { status: 400 }
      );
    }

    // Simular procesamiento de datos
    const submissionData: SubmissionData = {
      slug,
      answers: body.answers,
      submittedAt: new Date().toISOString()
    };

    // Aquí simularíamos guardar en base de datos
    console.log('Datos de envío simulado:', submissionData);

    // Generar un ID de envío simulado
    const submissionId = `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Simular un pequeño delay como si estuviéramos procesando
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: 'Formulario enviado exitosamente',
      submissionId,
      redirectUrl: `/forms/confirmation?id=${submissionId}&form=${slug}`
    });

  } catch (error) {
    console.error('Error al procesar el envío:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor al procesar el envío' },
      { status: 500 }
    );
  }
}
