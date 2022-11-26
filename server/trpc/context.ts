import { H3Event } from "h3"

export function createContext (event: H3Event) {
    console.log('cookies', parseCookies(event))
    return {}
  }