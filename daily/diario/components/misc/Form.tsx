"use client";

import { useRef, useState } from "react";
import { mutate } from "swr";
import { FaDownload } from "react-icons/fa";
import Action from "../common/Action";

import { createPost } from "@/utils/api";
import MessageBox, { Message } from "../common/MessageBox";
import { PostCreatePayload } from "../../types/PostCreatePayload";

export default function Form() {
  // Declaração dos estados para armazenar os valores do formulário
  const [data, setData] = useState<PostCreatePayload>({
    id: "",
    author: "",
    email: "",
    title: "",
    category: "",
    content: "",
  });
  const [message, setMessage] = useState<Message>({
    content: "",
  });
  const fileInputRef = useRef<HTMLInputElement>(null); // Referência ao input do tipo file (imagem)
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Função que simula o clique no input de upload de imagem
  const handleUploadClick = () => {
    fileInputRef.current?.click(); // Dispara o clique no input escondido
  };

  // Função chamada quando o usuário seleciona uma imagem
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setData((prev) => ({ ...prev, image: event.target.files?.[0] }));
    }
  };

  const onInvalid = (
    _event: React.FormEvent,
    message: string = "Preencha corretamente todos os campos."
  ) => {
    setMessage({ content: message, positive: false });
  };

  const reset = () => {
    // Reseta todos os campos do formulário

    setData({
      id: "",
      author: "",
      email: "",
      title: "",
      category: "",
      content: "",
    });
    if (fileInputRef.current) fileInputRef.current.value = "";

    setMessage({ content: "" });
  };

  // Função chamada ao enviar o formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (data.content.trim().length <= (textAreaRef.current?.minLength || 0)) {
      onInvalid(e);
      return textAreaRef.current?.focus();
    }

    try {
      await createPost(data);

      reset();
      setMessage({ content: "Formuário Enviado com Sucesso.", positive: true });
      mutate("/api/posts");
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setMessage({
        content: "Ocorreu um erro ao enviar formulário. Tente Novamente.",
        positive: false,
      });
    }
  };

  return (
    <>
      <h2>Nova Postagem</h2>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        onReset={reset}
      >
        <div className="row gtr-uniform">
          {/* Campo de nome */}
          <div className="col-6 col-12-xsmall">
            <input
              type="text"
              value={data.author}
              onChange={(e) =>
                setData((prev) => ({ ...prev, author: e.target.value }))
              }
              onInvalid={onInvalid}
              name="nome"
              placeholder="Nome"
              required
              pattern=".*\S.*"
            />
          </div>

          {/* Campo de email */}
          <div className="col-6 col-12-xsmall">
            <input
              type="email"
              value={data.email}
              onChange={(e) =>
                setData((prev) => ({ ...prev, email: e.target.value }))
              }
              onInvalid={onInvalid}
              placeholder="Email"
              required
            />
          </div>

          {/* Campo de título ou descrição */}
          <div className="col-12 col-12-xsmall">
            <input
              type="text"
              value={data.title}
              onChange={(e) =>
                setData((prev) => ({ ...prev, title: e.target.value }))
              }
              onInvalid={onInvalid}
              maxLength={40}
              placeholder="Título"
              pattern=".*\S.*"
              required
            />
          </div>

          <div className="col-12 col-12-xsmall">
            <input
              type="text"
              list="category-options"
              placeholder="Categoria"
              value={data.category}
              onChange={(e) =>
                setData((prev) => ({ ...prev, category: e.target.value }))
              }
              onInvalid={onInvalid}
              pattern=".*\S.*"
              required
            />
          </div>

          <div className="col-12 col-12-xsmall">
            <textarea
              ref={textAreaRef}
              placeholder="Descrição"
              onChange={(e) =>
                setData((prev) => ({ ...prev, content: e.target.value }))
              }
              onInvalid={onInvalid}
              rows={6}
              value={data.content}
              style={{
                resize: "vertical",
              }}
              minLength={40}
              required
            ></textarea>
          </div>

          {/* Upload da imagem */}
          <div className="col-12">
            <input
              type="file"
              ref={fileInputRef} // input escondido
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
              onInvalid={(e) => {
                e.preventDefault();
                onInvalid(e, "Anexe uma imagem.");
              }}
              required
            />
            <Action
              size="small"
              icon={{ element: FaDownload, solid: true }}
              href="#"
              onClick={handleUploadClick} // botão estilizado para upload
            >
              Anexar Imagem
            </Action>

            {/* Exibe o nome da imagem selecionada */}
            {data.image && (
              <p style={{ marginTop: "0.5rem" }}>
                Selected: <strong>{data.image.name}</strong>
              </p>
            )}
          </div>

          {/* Botões de enviar e resetar */}
          <div className="col-12">
            <ul className="actions fit">
              <li>
                <input type="submit" value="Salvar" className="primary large" />
              </li>
              <li>
                <input type="reset" value="Reset" className="large" />
              </li>
            </ul>
          </div>

          <MessageBox message={message} setMessage={setMessage} />
        </div>
      </form>
    </>
  );
}
