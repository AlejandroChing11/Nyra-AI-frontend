import { NextResponse } from 'next/server';
import { FORMS } from '@/data/FORMS';

export async function GET() {
  try {
    // Retornar información completa de todos los formularios incluyendo icon
    const formsData = FORMS.map(form => ({
      title: form.title,
      description: form.description,
      slug: form.slug,
      questionCount: form.questions.length,
      iconType: 'stethoscope' // Todos usan el mismo icon por ahora
    }));

    return NextResponse.json({
      success: true,
      data: formsData
    });

  } catch (error) {
    console.error('Error al obtener los formularios:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
