import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Register() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [ref, setRef] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (router.query.ref) {
      setRef(router.query.ref)
    }
  }, [router.query.ref])

  const isValidPhone = (phone) => {
    const angolaRegex = /^(\+244|0)?9\d{8}$/
    return angolaRegex.test(phone)
  }

  const handleRegister = () => {
    if (!isValidPhone(phone)) {
      setError('Número de telefone inválido para Angola.')
      return
    }
    alert(`Registrado com sucesso!\nNome: ${name}\nTelefone: ${phone}\nReferência: ${ref}`)
    setName('')
    setPhone('')
    setPassword('')
    setError('')
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Criar Conta</h2>
      {ref && <p className="mb-2 text-sm text-gray-600">Você está sendo convidado por: <strong>{ref}</strong></p>}
      <input type="text" placeholder="Nome completo" className="block w-full p-2 border mb-2" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="tel" placeholder="Telefone (ex: 923456789 ou +244923456789)" className="block w-full p-2 border mb-2" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type="password" placeholder="Senha" className="block w-full p-2 border mb-2" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
      <button onClick={handleRegister} className="bg-blue-600 text-white px-4 py-2 rounded">Registrar</button>
    </div>
  )
}
