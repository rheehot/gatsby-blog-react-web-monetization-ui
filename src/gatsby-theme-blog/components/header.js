import React from "react"
import OriginalHeader from "gatsby-theme-blog/src/components/header"

import { MonetizationStatus } from "react-web-monetization-ui"

const Header = props => (
  <>
    <OriginalHeader {...props} />
    <MonetizationStatus style={{ textAlign: "center" }} />
  </>
)

export default Header
