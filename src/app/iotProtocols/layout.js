import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4 border-r mt-10">
        <h2 className="text-xl font-semibold mb-4">IoT Protocols</h2>
        <ul className="space-y-2 text-blue-700">
          <li>
            <Link href="/protocols/AMQP" className="hover:underline">MQTT</Link>
          </li>
          <li>
            <Link href="/protocols/coap" className="hover:underline">CoAP</Link>
          </li>
          <li>
            <Link href={`/Iot/AMQP`} className="hover:underline">AMQP</Link>
          </li>
          <li>
            <Link href="/protocols/https" className="hover:underline">HTTPS</Link>
          </li>
          <li>
            <Link href="/protocols/websockets" className="hover:underline">WebSockets</Link>
          </li>
          <li>
            <Link href="/protocols/lwm2m" className="hover:underline">LwM2M</Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
