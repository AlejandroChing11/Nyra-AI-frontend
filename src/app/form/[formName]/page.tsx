
export default function FormPage({ params }: any) {


  const { formName } = params;


  return (
    <h1>This is a form for {formName}</h1>
  );
}
