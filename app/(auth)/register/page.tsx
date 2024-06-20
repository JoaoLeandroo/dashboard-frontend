import Container from "@/components/Container";
import Link from "next/link";

const PageRegister = () => {
    return ( 
        <Container>
            <div className="w-full min-h-screen flex items-center justify-center">
                <form className="max-w-[500px] p-3 w-full flex flex-col gap-y-3">
                    <div className="w-full text-center">
                        <h2 className="text-2xl md:text-3xl font-bold">Crie sua conta</h2>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name">Nome:</label>
                        <input className="w-full h-11 px-3 rounded shadow bg-zinc-700/60" type="text" name="name" id="name" placeholder="Digite o seu nome" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email:</label>
                        <input className="w-full h-11 px-3 rounded shadow bg-zinc-700/60" type="email" name="email" id="email" placeholder="example@example.com" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="age">Idade:</label>
                        <input className="w-full h-11 px-3 rounded shadow bg-zinc-700/60" type="text" name="age" id="age" placeholder="Informe sua idade, ex: 22" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password">Senha:</label>
                        <input className="w-full h-11 px-3 rounded shadow bg-zinc-700/60" type="password" name="password" id="password" placeholder="Informe uma senha" />
                    </div>
                    <button className="btn btn-success text-white mt-3 font-medium text-lg">Cadastre-se</button>
                    <div className="w-full text-center">
                        <p className="text-white">Já possui conta? <Link className="text-zinc-400 hover:text-zinc-500 transition duration-200" href={"/login"}>Faça login</Link></p>
                    </div>
                </form>
            </div>
        </Container>
     );
}
 
export default PageRegister;