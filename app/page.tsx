import Link from "next/link";
export default function Home() {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center gap-y-3">
      <Link href={"/login"} className="btn btn-success w-72 text-white">login</Link>
      <Link href={"/register"} className="btn btn-success w-72 text-white">Registre-se</Link>
    </section>
  );
}
