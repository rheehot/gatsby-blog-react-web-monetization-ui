/**
 * Show whether monetization is running/active
 */
import React from "react"
import { useMonetizationState } from "react-web-monetization"

const cssTemporary = { textAlign: "center" }
const activeEmoji = (
  <span role="img" aria-label="money mouth face">
    🤑
  </span>
)
const inactiveEmoji = (
  <span role="img" aria-label="sad pensive face">
    😔
  </span>
)

const MonetizeStatus = () => {
  const monetization = useMonetizationState()
  console.log("monetization ", monetization)

  if (monetization.state === "pending") {
    return <div style={cssTemporary}>Loading...</div>
  } else if (monetization.state === "started") {
    return <div style={cssTemporary}>{activeEmoji} Monetization is active</div>
  } else {
    // monetization.state === 'stopped' || !monetization.state
    return (
      <div style={cssTemporary}>{inactiveEmoji} Monetization is not active</div>
    )
  }
}

export default MonetizeStatus
