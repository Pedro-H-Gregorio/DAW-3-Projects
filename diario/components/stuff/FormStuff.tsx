"use client";

import { useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
import Action from "../common/Action";

export default function FormStuff() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(event.target.files[0]);
        }
    };

    return (
        <>
            <h2>Form</h2>
            <form method="post" action="#" encType="multipart/form-data" onReset={() => {
                setName('');
                setEmail('');
                setTitle('');
                setSelectedImage(null);
                setCategory('');
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }}}>
                <div className="row gtr-uniform">
                    <div className="col-6 col-12-xsmall">
                        <input type="text" name="demo-name" id="demo-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    </div>
                    <div className="col-6 col-12-xsmall">
                        <input type="email" name="demo-email" id="demo-email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>

                    <div className="col-12 col-12-xsmall">
                        <input type="text" name="demo-title" id="demo-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                    </div>

                    <div className="col-12 col-12-xsmall">
                    <input 
                        type="text" 
                        name="demo-category" 
                        id="demo-category" 
                        list="category-options"
                        placeholder="- Category -" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                    />
                    <datalist id="category-options">
                        <option value="Manufacturing" />
                        <option value="Shipping" />
                        <option value="Administration" />
                        <option value="Human Resources" />
                    </datalist>
                </div>
                    <div className="col-12">
                        <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows={6}></textarea>
                    </div>
                    <div className="col-12">
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <Action
                            size="small"
                            icon={{
                                element: FaDownload,
                                solid: true,
                            }}
                            href="#"
                            onClick={handleUploadClick}
                        >
                            Upload Image
                        </Action>
                        {selectedImage && (
                            <p style={{ marginTop: "0.5rem" }}>
                                Selected: <strong>{selectedImage.name}</strong>
                            </p>
                        )}
                    </div>
                    <div className="col-12">
                        <ul className="actions">
                            <li><input type="submit" value="Send Message" className="primary" /></li>
                            <li><input type="reset" value="Reset" /></li>
                        </ul>
                    </div>
                </div>
            </form>
        </>
    );
}
