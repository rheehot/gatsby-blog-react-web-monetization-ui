/**
 * Show whether monetization is running/active
 */
import React from "react"
import { useMonetization } from "../hooks/use-monetization"

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
  const { isMonetized, isLoading } = useMonetization()

  if (isLoading) {
    return <div style={cssTemporary}>Loading...</div>
  } else if (isMonetized) {
    return <div style={cssTemporary}>{activeEmoji} Monetization is active</div>
  } else {
    return (
      <div style={cssTemporary}>{inactiveEmoji} Monetization is not active</div>
    )
  }
}

export default MonetizeStatus
