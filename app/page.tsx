import TextEnhancer from "@/components/text-enhancer"
import { Footer } from "@/components/ui/footer"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
            Upgrade Your Writing, Effortlessly 🚀
          </h1>
          <TextEnhancer />
        </div>
      </main>
      <Footer /> {/* Now it's outside main */}
    </div>
  )
}

