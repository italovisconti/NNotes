import { TitleComponent } from "@/components/title/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TitleComponent />
      <p>Esta es la pagina principal de nuestra aplicacion de notas para la materia de Cloud Computing</p>
    </main>
  );
}
