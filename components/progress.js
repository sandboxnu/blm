export default function Progress({ raised, total }) {
  const percent = Math.floor((raised / total) * 100);
  return (
    <div className="w-full max-w-xl">
      <div className="flex items-baseline">
        <span className="text-2xl">${raised}</span>
        <span className="ml-1 text-gray-700"> matched of ${total}</span>
        <span className="ml-auto text-gray-700">
          ${total - raised} still unmatched!
        </span>
      </div>
      <div className="h-3 bg-white rounded-full shadow-xs">
        <div
          className="h-full bg-blue-800 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
