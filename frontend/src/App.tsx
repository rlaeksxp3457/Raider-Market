import { useQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ['health'],
    queryFn: async () => {
      try {
        const response = await fetch('http://localhost:3000/api/health')
        if (!response.ok) throw new Error('API not available')
        return await response.json()
      } catch {
        return { status: 'disconnected', message: 'Backend not available' }
      }
    },
    refetchInterval: 5000,
  })

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Raider Market</h1>
          <p className="text-muted-foreground">Arc Raiders Exchange Platform</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Frontend Stack</CardTitle>
              <CardDescription>Modern React application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm">⚛️ React 19</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">📘 TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">🎨 shadcn/ui + Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">🔄 React Query</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Backend Status</CardTitle>
              <CardDescription>API connection status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isLoading ? (
                <div className="text-sm text-muted-foreground">Checking connection...</div>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${data?.status === 'ok' ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-sm font-medium">
                      {data?.status === 'ok' ? 'Connected' : 'Disconnected'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {data?.message || 'Waiting for backend...'}
                  </p>
                </>
              )}
              <Button className="w-full" onClick={() => window.location.reload()}>
                Refresh Status
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
            <CardDescription>Full-stack application architecture</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• NestJS framework</li>
                  <li>• Prisma ORM</li>
                  <li>• MySQL database</li>
                  <li>• RESTful API</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Infrastructure</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Docker Compose</li>
                  <li>• Nginx reverse proxy</li>
                  <li>• Multi-container setup</li>
                  <li>• Development & Production ready</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
