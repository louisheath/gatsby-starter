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
              window.userledSettings={app_id:"360e1a78-2fb5-497b-81b6-5dc7f71b88f6"},
              function(){
                if(!window.Userled){window.Userled=function(){return a.call(arguments)};var a=window.Userled;a.call=function(b){return new Promise(function(c,d){a.queue.push([].concat.apply([c,d],b))})},a.queue=[],a.snippetVersion="2.0.1";var b=function(){var a=document.createElement("script");a.type="text/javascript",a.src="https://api.userled.io/static/sdk.bundle.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)};b()
              }}();
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
