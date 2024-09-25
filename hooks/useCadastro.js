'user client'

import { cadastrarUsuario } from "@/services/cadastroService";
import { useState } from "react"

export function useCadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await cadastrarUsuario({ email, password });
            window.location.href = '/boas-vindas'
        } catch (erro) {
            setErro(erro);
        }
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        erro,
        handleSubmit
    }
}