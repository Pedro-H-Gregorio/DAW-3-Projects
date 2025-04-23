"use client";

import { useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
import Action from "../common/Action";

import FormData from "form-data";

import { createPost } from "@/utils/api";

export default function FormStuff() {
  // Declaração dos estados para armazenar os valores do formulário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null); // Referência ao input do tipo file (imagem)

  // Função que simula o clique no input de upload de imagem
  const handleUploadClick = () => {
    fileInputRef.current?.click(); // Dispara o clique no input escondido
  };

  // Função chamada quando o usuário seleciona uma imagem
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]); // Armazena a imagem selecionada
    }
  };

  const reset = () => {
    // Reseta todos os campos do formulário
    setName("");
    setEmail("");
    setTitle("");
    setSelectedImage(null);
    setCategory("");
    setContent("");
    setMessage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Função chamada ao enviar o formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita o recarregamento da página esse aqui fui sugestão do gpt não entendi mt bem ainda
    const form = new FormData();

    form.append("nomeAutor", name);
    form.append("email", email);
    form.append("categoria", category);
    form.append("descricao", content);
    form.append("titulo", title);
    form.append("file", selectedImage);

    await createPost(form);
    reset();
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>

          {/* Campo de email */}
          <div className="col-6 col-12-xsmall">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          {/* Campo de título ou descrição */}
          <div className="col-12 col-12-xsmall">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>

          <div className="col-12 col-12-xsmall">
            <input
              type="text"
              list="category-options"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="col-12 col-12-xsmall">
            <textarea
              placeholder="Content"
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              value={content}
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
            />
            <Action
              size="small"
              icon={{ element: FaDownload, solid: true }}
              href="#"
              onClick={handleUploadClick} // botão estilizado para upload
            >
              Upload Image
            </Action>

            {/* Exibe o nome da imagem selecionada */}
            {selectedImage && (
              <p style={{ marginTop: "0.5rem" }}>
                Selected: <strong>{selectedImage.name}</strong>
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

          {/* Exibição da mensagem de feedback */}
          {message && (
            <div className="col-12">
              <p>{message}</p>
            </div>
          )}
        </div>
      </form>
    </>
  );
}
