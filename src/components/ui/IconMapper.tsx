import { Stethoscope } from 'lucide-react';

interface IconMapperProps {
  iconType: string;
  className?: string;
}

const iconMap = {
  stethoscope: Stethoscope,
  // Aquí puedes agregar más iconos en el futuro
  default: Stethoscope
};

export function IconMapper({ iconType, className = "mr-2 h-4 w-4" }: IconMapperProps) {
  const IconComponent = iconMap[iconType as keyof typeof iconMap] || iconMap.default;

  return <IconComponent className={className} />;
}
