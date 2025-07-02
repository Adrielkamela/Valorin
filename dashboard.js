import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [notificacoes, setNotificacoes] = useState([])

  useEffect(() => {
    const gerarNotificacao = () => {
      const prefixos = ['923', '924', '925', '926', '927', '928', '929', '930', '931', '932', '933', '934']
      const prefixo = prefixos[Math.floor(Math.random() * prefixos.length)]
      const sufixo = Math.floor(Math.random() * 90 + 10)
      const numero = `${prefixo.slice(0,2)}*****${sufixo}`
      const valor = (Math.floor(Math.random() * (500000 - 1400 + 1)) + 1400).toLocaleString('pt-AO')
      return `Número ${numero} acabou de fazer um levantamento de ${valor} Kz`
    }

    const interval = setInterval(() => {
      setNotificacoes((prev) => [gerarNotificacao(), ...prev.slice(0, 4)])
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Painel do Usuário</h1>
      <p className="mb-2">Olá, Usuário Exemplo</p>
      <p className="mb-2">Seu código de convite: <strong>U12345</strong></p>
      <p className="mb-6">Link de convite: <code className="bg-gray-100 px-2 py-1">https://sua-plataforma.vercel.app/auth/register?ref=U12345</code></p>

      <h2 className="text-xl font-semibold mb-2">Notificações recentes</h2>
      <ul className="space-y-1">
        {notificacoes.map((n, i) => (
          <li key={i} className="text-sm text-gray-700 bg-gray-50 p-2 rounded border">{n}</li>
        ))}
      </ul>
    </div>
  )
}
