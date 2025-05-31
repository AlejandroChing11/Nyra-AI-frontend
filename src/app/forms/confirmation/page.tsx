import { Suspense } from 'react';
import { Card, CardContent } from "@/components/ui/Card";
import { Loader2 } from 'lucide-react';
import ConfirmationContent from './ConfirmationContent';

function ConfirmationLoading() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-green-50 via-emerald-100 to-teal-50 p-4">
      <Card className="w-full max-w-2xl mx-auto my-auto shadow-lg bg-white">
        <CardContent className="text-center p-8">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-green-500" />
          <p className="text-gray-600">Cargando confirmación...</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<ConfirmationLoading />}>
      <ConfirmationContent />
    </Suspense>
  );
}
