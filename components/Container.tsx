export default function Container({ children }: { children: React.ReactNode }) {
  return <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>;
}
