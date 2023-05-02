import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import {Seo} from "../../components/seo"

const Page = () => (
  <Layout>
    <div className="slide-image-container">
      <div className="slide-image" id="image-area">
        <div className="slide-empty-box"></div>
        <StaticImage
        src="../../images/vnospinari0/DSC_3696.png"
        quality={95}
        formats={["AUTO", "WEBP"]}
        alt="WIDE_COMPOSITION_BW"
        />
        <StaticImage
          src="../../images/vnospinari0/DSC_4254.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="horizontal_compisition"
        />
        <StaticImage
          src="../../images/vnospinari0/DSC_4332.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="horizontal_compisition"
        />
        <StaticImage
          src="../../images/vnospinari0/flat-2-3d.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="horizontal_compisition"
        />
        <StaticImage
          src="../../images/vnospinari0/hand_chain_web3.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="horizontal_compisition"
        />
        <StaticImage
          src="../../images/vnospinari0/collage.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="horizontal_compisition"
        />
      </div>
    </div>

    <div className="color-text py-5">
      <p className="color-title">[ _vnospinari0 ]</p>
      <p className="my-0">a chain - begins / ends</p>
      <p className="my-0">a body as its closure</p>
      <p className="my-0">a bridge linking selves</p>
      <p className="my-0 pt-4">the primary shapes</p>
      <p className="my-0">circle _ triangle then square</p>
      <p className="my-0">square _ triangle then circle</p>
      <p className="my-0">the twisted ladder</p>
      <p className="my-0 pt-4">thorns resemble calls</p>
      <p className="my-0">calls resemble wounds</p>
      <p className="my-0">wounds resemble rhythms</p>
      <p className="my-0">rhythms resemble thorns</p>
    </div>
  </Layout>
)

export default Page

export const Head = () => (
    <Seo title="_vnospinari0" />
)
