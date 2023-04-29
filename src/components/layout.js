import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Header from "./header"
import Footer from "./footer"
import "./../css/layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container-parent">
      <div className="container-fluid p-5">
        {/* <Header /> */}
        {/* <div>
          <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
        </div> */}
        <div>
          {children}
        </div>
        {/* <div className="footer">
          <Footer />
        </div> */}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
