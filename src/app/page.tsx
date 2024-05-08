'use client'
import { ButtonPlus } from "@/components/buttonPlus/page";
import { LogoSectionComponent } from "@/components/logoSection/page";
import { ModalNoteComponent } from "@/components/modal/page";
import { NoteLIst } from "@/components/noteList/page";
import { SearchBarComponent } from "@/components/searchBar/page";
import { useAppContext } from "@/utils/AppContext";

export default function Home() {
  const {
    open,
    handleCancel
  } = useAppContext();

  return (
    <main className="flex min-h-screen flex-col py-14 px-32">
      <LogoSectionComponent />
      <SearchBarComponent />
      <NoteLIst />
      {open && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex flex-col justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90" onClick={handleCancel}></div>
          <ModalNoteComponent />
        </div>
      )}
      <div className="fixed bottom-0 right-0 p-6">
        <ButtonPlus />
      </div>
    </main>
  );
}
