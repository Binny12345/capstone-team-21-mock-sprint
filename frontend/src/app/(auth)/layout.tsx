import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="auth-noise relative min-h-screen flex items-center justify-center overflow-hidden bg-auth-background px-4 font-[family-name:var(--font-auth-sans)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/5 left-1/2 h-[400px] w-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(200,169,110,0.06)_0%,_transparent_70%)]"
      />
      <div className="relative w-full max-w-[400px]">{children}</div>
    </div>
  )
}