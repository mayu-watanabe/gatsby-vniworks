import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import { Seo } from "../../components/seo"

const Page = () => (
  <Layout>
    <div className="slide-image-container">
      <div className="slide-image" id="image-area">
        <div className="slide-empty-box"></div>
        <StaticImage
          src="../../images/void.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="void"
        />
        <StaticImage
          src="../../images/void.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="void"
        />
        <StaticImage
          src="../../images/void.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="void"
        />
        <StaticImage
          src="../../images/void.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="void"
        />
      </div>
    </div>

    <div className="color-text py-5">
      <p className="color-title">[ _vnente ]</p>
      <p className="my-0">▯▯▯ ▯▯▯▯▯▯▯ ▯▯ ▯▯▯▯▯ ▯▯▯▯▯▯▯▯▯▯ ▯▯▯▯▯ ▯▯▯▯▯▯▯▯▯▯ ▯</p>
      <p className="my-0 pt-4">▯▯▯▯▯ ▯▯▯▯▯▯ ▯ ▯▯▯ ▯▯▯▯▯▯ ▯▯▯▯▯▯▯▯▯▯▯ ▯▯▯ ▯▯▯▯▯▯▯▯</p>
      <p className="my-0">▯▯▯▯▯▯▯▯▯▯▯ ▯▯▯▯▯ ▯▯ ▯ ▯▯▯▯▯▯ ▯▯▯▯ ▯▯▯▯▯▯▯▯▯▯ ▯▯▯▯ ▯▯▯▯▯▯▯▯</p>
      <p className="my-0 pt-4">▯ ▯▯▯ ▯▯▯▯▯▯▯ ▯▯▯▯▯▯▯▯ ▯▯ ▯▯▯ ▯▯▯▯▯ ▯▯▯▯▯▯ ▯▯▯▯ ▯▯▯▯</p>
      <p className="my-0">▯▯▯ ▯▯▯▯▯▯▯▯▯▯▯▯▯ ▯▯▯ ▯▯▯▯ ▯▯ ▯▯▯▯▯▯▯▯ ▯▯▯▯▯▯ ▯▯▯▯ ▯▯▯▯</p>
      <p className="my-0 pt-4">▯▯▯▯ ▯▯▯▯ ▯▯▯▯▯▯▯▯▯ ▯▯▯▯▯▯▯▯▯▯▯ ▯▯▯▯▯ ▯ ▯▯▯▯▯▯▯▯▯▯ ▯▯▯ ▯ ▯▯▯▯ ▯▯▯▯▯▯</p>
      <p className="my-0 pt-4">▯▯▯▯▯▯▯▯ ▯ ▯ ▯▯▯▯ ▯▯▯▯▯▯▯ ▯▯▯ ▯▯▯▯▯▯▯▯▯ ▯▯▯▯▯ ▯▯▯</p>
    </div>
  </Layout>
)

export default Page

export const Head = () => (
    <Seo title="▯▯▯▯▯▯▯" />
)
