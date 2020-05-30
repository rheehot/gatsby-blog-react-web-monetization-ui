import React from "react"

/**
 * Change the content to add your own bio
 */

const byline = (
  <>
    Test site to try the Web Monetization API by{" "}
    <a href="https://dev.to/@ekafyi" rel="external">
      @ekafyi
    </a>
    .
  </>
)
const libs = (
  <>
    Uses{" "}
    <a
      href="https://github.com/ekafyi/react-web-monetization-ui"
      rel="external"
    >
      react-web-monetization
    </a>{" "}
    and{" "}
    <a
      href="https://github.com/sharafian/react-web-monetization"
      rel="external"
    >
      react-web-monetization-ui
    </a>
    .
  </>
)

export default function Bio() {
  return (
    <>
      {byline}
      <br />
      {libs}
    </>
  )
}
