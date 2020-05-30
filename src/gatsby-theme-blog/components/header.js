import React from "react"
import OriginalHeader from "gatsby-theme-blog/src/components/header"

import MonetizeStatus from "../../components/monetize-status"

const Header = props => (
  <>
    <OriginalHeader {...props} />
    <MonetizeStatus />
  </>
)

export default Header
