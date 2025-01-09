import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r p-4">
        <nav className="space-y-2">
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
}