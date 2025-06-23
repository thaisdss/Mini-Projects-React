import { createBrowserRouter } from "react-router"
import { App } from "../App"
import { Home } from "../pages/Home"
import { Quiz } from "../pages/Quiz"
import { Result } from "../pages/Result"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/quiz",
        Component: Quiz,
      },
      {
        path: "/result",
        Component: Result
      }
    ]
  },
])