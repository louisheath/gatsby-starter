import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.userledSettings={app_id:"360e1a78-2fb5-497b-81b6-5dc7f71b88f6"};
              (function(){
                if(!window.Userled){window.Userled=function(){e.call(arguments)};var e=window.Userled;e.call=function(t){e.queue.push(t)},e.queue=[],e.snippetVersion="1.0.0";var t=function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://api.userled.io/static/sdk.bundle.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)};"complete"===document.readyState?t():window.attachEvent?window.attachEvent("onload",t):window.addEventListener("load",t,!1);
              }})();
            `,
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
