import { Stethoscope } from 'lucide-react';
interface Question {
  questionId: string;
  question: string;
}

interface Form {
  title: string;
  icon: JSX.Element;
  description: string;
  questions: Question[];
  answers?: string[];
  slug: string;
}

export const FORMS: Form[] = [
  {
    title: "Radiografía de Recto",
    slug: "radiografia-de-recto",
    icon: <Stethoscope className="mr-2 h-4 w-4" />,
    description: "Radiografía de Recto",
    questions: [
      { questionId: "1", question: "¿Se observa alguna masa tumoral en el recto?" },
      { questionId: "2", question: "En caso afirmativo, ¿cuál es el tamaño aproximado de la masa? (en cm)" },
      { questionId: "3", question: "¿Es la masa visible bien delimitada o difusa? (Bien delimitada/Difusa)" },
      { questionId: "4", question: "¿Hay evidencia de invasión en estructuras adyacentes? (Sí/No)" },
      { questionId: "5", question: "¿Existe engrosamiento de la pared rectal? (Sí/No)" },
      { questionId: "6", question: "¿Se observan adenopatías perirrectales? (Sí/No)" },
      { questionId: "7", question: "¿Cuál es la localización exacta de la masa en el recto? (Parte superior/Parte media/Parte inferior)" },
      { questionId: "8", question: "¿Se identifica obstrucción parcial o completa? (Parcial/Completa/No hay obstrucción)" },
      { questionId: "9", question: "¿Hay signos de perforación rectal? (Sí/No)" },
      { questionId: "10", question: "¿Observa signos de metástasis en tejidos circundantes? (Sí/No)" },
    ]
  },
  {
    title: "Radiografía para intestino delgado con contraste",
    slug: "radiografia-intestino-delgado-contraste",
    icon: <Stethoscope className="mr-2 h-4 w-4" />,
    description: "Radiografía para intestino delgado con contraste",
    questions: [
      { questionId: "1", question: "¿Hay evidencia de obstrucción intestinal? (Sí/No)" },
      { questionId: "2", question: "¿La obstrucción es parcial o completa? (Parcial/Completa)" },
      { questionId: "3", question: "¿Se observa alguna masa en el intestino delgado? (Sí/No)" },
      { questionId: "4", question: "¿Cuál es la ubicación de la masa si existe? (Especificar segmento afectado)" },
      { questionId: "5", question: "¿Se observa engrosamiento en la pared intestinal? (Sí/No)" },
      { questionId: "6", question: "¿Existe dilatación proximal a la obstrucción? (Sí/No)" },
      { questionId: "7", question: "¿Se visualizan signos de isquemia o necrosis intestinal? (Sí/No)" },
      { questionId: "8", question: "¿Hay cambios en la mucosa que sugieran inflamación o infiltración tumoral? (Sí/No)" },
      { questionId: "9", question: "¿El contraste se distribuye de manera uniforme? (Sí/No)" },
      { questionId: "10", question: "¿Existen adenopatías mesentéricas visibles? (Sí/No)" }
    ]
  },
  {
    title: "Radiografía de colon con contraste",
    slug: "radiografia-colon-contraste",
    icon: <Stethoscope className="mr-2 h-4 w-4" />,
    description: "Radiografía de colon con contraste",
    questions: [
      { questionId: "1", question: "¿Se observan pólipos en el colon? (Sí/No)" },
      { questionId: "2", question: "¿Cuál es el tamaño estimado del pólipo o lesión mayor? (en cm)" },
      { questionId: "3", question: "¿La lesión es pediculada o sésil? (Pediculada/Sésil)" },
      { questionId: "4", question: "¿Existe un engrosamiento de la pared colónica? (Sí/No)" },
      { questionId: "5", question: "¿Se visualizan signos de obstrucción en el colon? (Sí/No)" },
      { questionId: "6", question: "¿Hay evidencia de perforación? (Sí/No)" },
      { questionId: "7", question: "¿Se identifican lesiones múltiples o únicas? (Única/Múltiples)" },
      { questionId: "8", question: "¿Hay presencia de masas o nódulos en el mesenterio? (Sí/No)" },
    ]
  },
  {
    title: "Radiografía de Recto con Contraste",
    slug: "radiografia-recto-contraste",
    icon: <Stethoscope className="mr-2 h-4 w-4" />,
    description: "Estudio de extensión de masa tumoral en recto",
    questions: [
      { questionId: "1", question: "¿Se observa una masa tumoral en el recto? (Sí/No)" },
      { questionId: "2", question: "¿La masa invade estructuras adyacentes? (Sí/No)" },
      { questionId: "3", question: "¿Cuál es el tamaño aproximado de la masa? (en cm)" },
      { questionId: "4", question: "¿Es la masa uniforme o presenta áreas heterogéneas? (Uniforme/Heterogénea)" },
      { questionId: "5", question: "¿Hay signos de estenosis en el canal rectal? (Sí/No)" },
      { questionId: "6", question: "¿Existen signos de inflamación perirrectal? (Sí/No)" },
      { questionId: "7", question: "¿Se observan adenopatías regionales? (Sí/No)" },
      { questionId: "8", question: "¿Hay signos de metástasis hacia órganos cercanos? (Sí/No)" },
      { questionId: "9", question: "¿La mucosa muestra patrones anormales? (Sí/No)" },
      { questionId: "10", question: "¿Existe evidencia de acumulación de líquido en el área perirrectal? (Sí/No)" },
    ]
  },
  {
    title: "Radiografía de Intestino Grueso (Colon y Recto)",
    slug: "radiografia-intestino-grueso",
    icon: <Stethoscope className="mr-2 h-4 w-4" />,
    description: "Detección de neoplasias o anormalidades en intestino grueso",
    questions: [
      { questionId: "1", question: "¿Se observan masas o pólipos en el colon o recto? (Sí/No)" },
      { questionId: "2", question: "¿La masa o pólipo es bien delimitado o mal delimitado? (Bien delimitado/Mal delimitado)" },
      { questionId: "3", question: "¿Cuál es la localización aproximada de la masa en el intestino? (Colon ascendente/Colon descendente/Recto/etc.)" },
      { questionId: "4", question: "¿Existe engrosamiento de la pared colónica o rectal? (Sí/No)" },
      { questionId: "5", question: "¿Se observan adenopatías mesentéricas? (Sí/No)" },
      { questionId: "6", question: "¿La masa tiene signos de invasión en órganos adyacentes? (Sí/No)" },
      { questionId: "7", question: "¿Se visualiza dilatación del segmento proximal a la masa? (Sí/No)" },
      { questionId: "8", question: "¿El contraste muestra distribución irregular? (Sí/No)" },
      { questionId: "9", question: "¿Hay signos de inflamación en las áreas circundantes a la masa? (Sí/No)" },
      { questionId: "10", question: "¿Se observa alguna obstrucción significativa en el área? (Sí/No)" },
    ]
  },
  {
    title: "Radiografía de Intestino Delgado con Contraste",
    slug: "radiografia-intestino-delgado-contraste",
    icon: <Stethoscope className="mr-2 h-4 w-4" />,
    description: "Estudio de diagnóstico de obstrucción o masas en intestino delgado",
    questions: [
      { questionId: "1", question: "¿Hay evidencia de obstrucción intestinal? (Sí/No)" },
      { questionId: "2", question: "¿La obstrucción es parcial o completa? (Parcial/Completa)" },
      { questionId: "3", question: "¿Se observa alguna masa en el intestino delgado? (Sí/No)" },
      { questionId: "4", question: "¿Cuál es la ubicación de la masa si existe? (Especificar segmento afectado)" },
      { questionId: "5", question: "¿Se observa engrosamiento en la pared intestinal? (Sí/No)" },
      { questionId: "6", question: "¿Existe dilatación proximal a la obstrucción? (Sí/No)" },
      { questionId: "7", question: "¿Se visualizan signos de isquemia o necrosis intestinal? (Sí/No)" },
      { questionId: "8", question: "¿Hay cambios en la mucosa que sugieran inflamación o infiltración tumoral? (Sí/No)" },
      { questionId: "9", question: "¿El contraste se distribuye de manera uniforme? (Sí/No)" },
      { questionId: "10", question: "¿Existen adenopatías mesentéricas visibles? (Sí/No)" }
    ]
  }
];

