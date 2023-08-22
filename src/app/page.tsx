import LeftSidebar from "./components/LeftSidebar";
import MainComponent from "./components/MainComponent";

export default function Home() {
  // const supabasePassword = T6zfyjMcjCYE66ai

  return (
    <main className=" bg-black w-full h-full relative flex items-center justify-center">
      <div className="relative max-w-screen-xl w-full h-full flex">
        {/* left sidebar for navigation */}
        <LeftSidebar />
        {/* Infinite content scroll */}
        <MainComponent />

        <section></section>
      </div>
    </main>
  );
}
