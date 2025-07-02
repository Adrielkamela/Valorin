import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo à Plataforma de Investimento</h1>
      <Link href="/auth/register" className="text-blue-600 underline">Criar Conta</Link>
    </main>
  )
}
