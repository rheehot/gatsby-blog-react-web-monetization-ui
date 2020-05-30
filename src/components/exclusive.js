/**
 * Wrap monetized component
 * https://dev.to/emma/setting-up-web-monetization-on-your-gatsby-blog-with-rss-dgp
 */
import React from "react"
import { useMonetization } from "../hooks/use-monetization"

const Exclusive = ({ children }) => {
  const { isMonetized, isLoading } = useMonetization()

  if (isLoading) {
    return <div>Loading...</div>
  } else if (isMonetized) {
    return <div>{children}</div>
  } else {
    return <div>Monetized content is hidden.</div>
  }
}

export default Exclusive
