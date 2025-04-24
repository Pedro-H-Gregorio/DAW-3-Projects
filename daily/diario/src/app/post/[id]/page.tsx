import { useRouter } from "next/navigation";

export default function EditPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Editando o item com ID: {params.id}</h1>
      {/* Seu formulário de edição aqui */}
    </div>
  );
}
