"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react" // Importando um ícone para o alerta

export function LoginForm({ className, ...props }) {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null) // Estado para a mensagem de sucesso
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setSuccess(null) // Limpa a mensagem de sucesso anterior

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Credenciais inválidas. Por favor, tente novamente.")
      }

      if (data.accessToken) {
        Cookies.set('token', data.accessToken, {
          expires: 1,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
        })
        setSuccess("Login bem-sucedido! Redirecionando...")
        setTimeout(() => {
          router.push('/lista')
        }, 2000)
      }
    } catch (err) {
      setError(err.message)
    } finally {
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Acesse sua conta</CardTitle>
          <CardDescription>
            Digite seu nome de usuário para entrar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <FieldGroup>
              {success && (
                <Alert className="border-green-500 text-green-700">
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Sucesso!</AlertTitle>
                  <AlertDescription>{success}</AlertDescription>
                </Alert>
              )}
              {error && (
                <Alert variant="destructive">
                  <AlertTitle>Erro no Login</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Field>
                <label htmlFor="username">Usuário</label>
                <Input
                  id="username"
                  type="text"
                  placeholder="exemplo@email.com"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isLoading}
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <label htmlFor="password">Senha</label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </Field>
              <Field>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Entrando..." : "Entrar"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}