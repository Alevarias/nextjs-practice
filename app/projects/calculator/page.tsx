
export default function CalculatorPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">Calculator</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a simple calculator page.
      </p>

      <div className="flex flex-row items-center justify-center">
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-blue-600">
          Add
        </button>

      </div>
    </div>
  );
}