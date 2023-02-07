/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Script } from "gatsby"

import Header from "./header"
import "./layout.css"

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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>
          {children}
          <Script id="userled">{`window.userledSettings={app_id:"360e1a78-2fb5-497b-81b6-5dc7f71b88f6"},function(){var e=window.Userled;if(window.userledSettings,"function"==typeof e)e("reattach_activator"),e("update",window.userledSettings);else{(e=function(){e.call(arguments)}).queue=[],e.call=function(t){e.queue.push(t)},window.Userled=e;var t=function(){console.log("loading script");var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://api.userled.io/static/sdk.bundle.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)};"complete"===document.readyState?t():window.attachEvent?window.attachEvent("onload",t):window.addEventListener("load",t,!1)}}()`}</Script>
        </main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
