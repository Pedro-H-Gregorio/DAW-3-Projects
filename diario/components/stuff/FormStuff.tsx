"use client";

import { useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
import Action from "../common/Action";

import FormData from 'form-data';

import axios from "axios";

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

    // Função chamada ao enviar o formulário
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Evita o recarregamento da página esse aqui fui sugestão do gpt não entendi mt bem ainda
        
        async function enviarDiario() {
          const form = new FormData();
        
          form.append('nomeAutor', name);
          form.append('email', email);
          form.append('categoria', category);
          form.append('descricao', content);
          form.append('titulo', title);
          form.append("file", selectedImage); // Adiciona o arquivo ao formData
        
          try {
            const response = await axios.post('http://localhost:5000/diarios', form, {
              headers: {
                  "Content-Type": "multipart/form-data",
                },
            });

            console.log('Resposta:', response.data);
          } catch (error) {
            console.error('Erro ao enviar:', error);
          }
        }
            
        enviarDiario();
    };
        /*
        try {
            // Primeiro passo: envia os dados do diário (sem imagem) é importante ser antes porque a imagem preciso ter um ID de diario associado
            const diarioResponse = await axios.post("http://localhost:5000/diarios", {
                nomeAutor: name,
                email: email,
                descricao: title,
                categoria: category,
                message: message,
                imagemPath: "",
            });

            const diarioId = diarioResponse.data?.id; // Pega o ID retornado do diário

            // Segundo passo: se houver uma imagem, faz o upload dela
            if (selectedImage && diarioId) {
                const formData = new FormData();

            }

            setMessage("Diário enviado com sucesso!");
        } catch (error: any) {
            console.error(error);
            setMessage("Erro ao enviar o diário.");
        }
    };*/

    return (
        <>
            <h2>Form</h2>
            <form
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                onReset={() => {
                    // Reseta todos os campos do formulário
                    setName('');
                    setEmail('');
                    setTitle('');
                    setSelectedImage(null);
                    setCategory('');
                    setContent('');
                    setMessage("");
                    if (fileInputRef.current) {
                        fileInputRef.current.value = "";
                    }
                }}
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
                            placeholder="- Category -" 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)} 
                        />
                    </div>
                    
                    <div className="col-12 col-12-xsmall">
                        <textarea
                            placeholder="Content"
                            onChange={(e) => setContent(e.target.value)}
                            rows={6}
                        >{content}
                        </textarea>
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
                        >Upload Image</Action>

                        {/* Exibe o nome da imagem selecionada */}
                        {selectedImage && (
                            <p style={{ marginTop: "0.5rem" }}>
                                Selected: <strong>{selectedImage.name}</strong>
                            </p>
                        )}
                    </div>

                    {/* Botões de enviar e resetar */}
                    <div className="col-12">
                        <ul className="actions">
                            <li><input type="submit" value="Send Message" className="primary" /></li>
                            <li><input type="reset" value="Reset" /></li>
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
    )
};