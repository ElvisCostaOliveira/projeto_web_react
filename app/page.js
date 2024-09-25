import Form from "@/components/form";
import { useCadastro } from "@/hooks/useCadastro";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/cadastro">Cadastrar-se</Link>
    </div>
  );
}
export default function Cadastro() {

  const { email, setEmail, password, setPassword, erro, handleSubmit } = useCadastro();
  return (
    <div>
      <h2>Cadastrar-se</h2>
      <Form
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        erro={erro}
        handleSubmit={handleSubmit} />
    </div>

  );
  const ;

}
