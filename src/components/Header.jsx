import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="z-10 w-full bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold text-white">Karol Pulawski</div>
        <Navbar />
      </div>
    </header>
  );
}
