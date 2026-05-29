export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          CollegeHub
        </h1>

        <div className="flex gap-6">
          <button>Colleges</button>
          <button>Compare</button>
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
}