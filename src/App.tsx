import { Route, Router, Switch } from "wouter"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"

function App() {
  return (
    <Router base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Switch>
            <Route path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
