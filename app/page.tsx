import TextEnhancer from "@/components/text-enhancer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Upgrade Your Writing, Effortlessly 🚀</h1>
        <TextEnhancer />
      </div>
    </main>
  )
}

