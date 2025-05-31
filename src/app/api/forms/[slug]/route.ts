import { NextRequest, NextResponse } from 'next/server';
import { FORMS } from '@/data/FORMS';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    // Buscar el formulario por slug
    const form = FORMS.find(form => form.slug === slug);

    if (!form) {
      return NextResponse.json(
        { error: 'Formulario no encontrado' },
        { status: 404 }
      );
    }

    // Retornar solo la información necesaria
    const formData = {
      title: form.title,
      description: form.description,
      slug: form.slug,
      questions: form.questions
    };

    return NextResponse.json({
      success: true,
      data: formData
    });

  } catch (error) {
    console.error('Error al obtener el formulario:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
