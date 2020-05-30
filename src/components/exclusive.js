/**
 * Wrap monetized component
 * https://dev.to/emma/setting-up-web-monetization-on-your-gatsby-blog-with-rss-dgp
 */
import React from "react"
import { useMonetizationState } from "react-web-monetization"

const Exclusive = ({ children }) => {
  const monetization = useMonetizationState()

  if (monetization.state === "pending") {
    return <div>Loading...</div>
  } else if (monetization.state === "started") {
    return <div>{children}</div>
  } else {
    // monetization.state === 'stopped' || !monetization.state
    return <div>Monetized content is hidden.</div>
  }
}

export default Exclusive
