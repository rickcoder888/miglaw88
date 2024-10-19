import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Home from "@/components/Home"
import ScrollToTopButton from "@/components/ScrollToTopButton"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </ThemeProvider>
  )
}

export default App