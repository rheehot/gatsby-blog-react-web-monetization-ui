/**
 * useMonetization() hook
 * https://dev.to/emma/getting-started-with-web-monetization-in-react-3m4j
 */
import { useEffect, useState } from "react"

export const useMonetization = () => {
  const [isMonetized, setIsMonetized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!document.monetization) {
      // This means this user doesn't have monetization capabilities
      // i.e. they don't have the Coil extension installed on their browser
      setIsLoading(false)
      setIsMonetized(false)
      return
    }

    // Note: A user could have monetization capabilities (i.e. installed Coil)
    // but that doesn't mean they've actually signed up for an account!
    const { state } = document.monetization

    // If the initial state is 'stopped', we can assume the user isn't
    // going to pay, and so we can stop loading
    if (state === "stopped") {
      setIsLoading(false)
      setIsMonetized(false)
    }

    // We add a listener to wait for the user to start paying
    document.monetization.addEventListener("monetizationstart", () => {
      console.log("🤑 monetization starts!")
      setIsMonetized(true)
      setIsLoading(false)
    })
  }, [])

  return { isMonetized, isLoading }
}
