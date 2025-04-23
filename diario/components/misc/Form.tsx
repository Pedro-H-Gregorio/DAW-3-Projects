"use client";

import { useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
import Action from "../common/Action";

import { createPost } from "@/utils/api";
import Box from "../common/Box";

export default function Form() {
    // Declaração dos estados para armazenar os valores do formulário

    const [data, setData] = useState<PostCreatePayload>({
        id: "",
        author: "",
        email: "",
        title: "",
        category: "",
        content: ""
    });
    const [message, setMessage] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null); // Referência ao input do tipo file (imagem)

    // Função que simula o clique no input de upload de imagem
    const handleUploadClick = () => {
        fileInputRef.current?.click(); // Dispara o clique no input escondido
    };

    // Função chamada quando o usuário seleciona uma imagem
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setData((prev) => (
                { ...prev, image: event.target.files?.[0] }
            ));
        }
    };

    const reset = () => {
        // Reseta todos os campos do formulário

        setData({
            id: "",
            author: "",
            email: "",
            title: "",
            category: "",
            content: ""
        });

        if (fileInputRef.current)
            fileInputRef.current.value = "";
    };

    // Função chamada ao enviar o formulário
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await createPost(data);
            console.log("TESTE");

            setMessage("Formuário Enviado com Sucesso.");
            reset();
        } catch (error) {
            console.error("Erro ao enviar:", error);
            setMessage("Ocorreu um erro ao enviar formulário. Tente Novamente.");
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
                            onChange={(e) => setData((prev) => ({ ...prev, author: e.target.value }))}
                            placeholder="Nome"
                            required
                        />
                    </div>

                    {/* Campo de email */}
                    <div className="col-6 col-12-xsmall">
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
                            placeholder="Email"
                        />
                    </div>

                    {/* Campo de título ou descrição */}
                    <div className="col-12 col-12-xsmall">
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData((prev) => ({ ...prev, title: e.target.value }))}
                            placeholder="Título"
                            required
                        />
                    </div>

                    <div className="col-12 col-12-xsmall">
                        <input
                            type="text"
                            list="category-options"
                            placeholder="Categoria"
                            value={data.category}
                            onChange={(e) => setData((prev) => ({ ...prev, category: e.target.value }))}
                            required
                        />
                    </div>

                    <div className="col-12 col-12-xsmall">
                        <textarea
                            placeholder="Descrição"
                            onChange={(e) => setData((prev) => ({ ...prev, content: e.target.value }))}
                            rows={6}
                            value={data.content}
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

                    {/* Exibição da mensagem de feedback */}
                    {message && (
                        <div className="col-12">
                            <Box>
                                <h3>{message}</h3>
                            </Box>
                        </div>
                    )}
                </div>
            </form>
        </>
    );
}
