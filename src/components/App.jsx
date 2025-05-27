import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="bg-supapurp dark:bg-supablue flex min-h-screen w-full flex-col items-center justify-center px-4">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
