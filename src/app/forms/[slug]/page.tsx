import { FormComponent } from "@/components/forms/FormComponent";


interface Props {
  params: {
    slug: string;
  };
}

export default function FormPage({ params }: Props) {

  const { slug } = params;

  return (
    <div>

      <FormComponent slug={slug} />

    </div>
  );
}
