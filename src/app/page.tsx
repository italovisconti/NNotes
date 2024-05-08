import { LogoSectionComponent } from "@/components/logoSection/page";
import { NoteFromList } from "@/components/noteFromList/page";
import { SearchBarComponent } from "@/components/searchBar/page";
interface Note {
  title: string;
  content: string;
}
const note: Note = {
  title: "Esta sera la nota del beta ddddddddd",
  content: "Esta es la descripcion de la nota del beta",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-14 px-32">
      <LogoSectionComponent />
      <SearchBarComponent />
      <NoteFromList note={note}/>
    </main>
  );
}
