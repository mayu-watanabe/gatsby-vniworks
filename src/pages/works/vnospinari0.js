import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import {Seo} from "../../components/seo"

const Page = () => (
  <Layout>
    <div className="slide-image-container">
      <div className="slide-image" id="image-area" data-slide-image="true">
        <div className="slide-empty-box"></div>
        <StaticImage
          src="../../images/vnospinari0/drawing_crop.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="drawing_crop"
          className="image"
        />
        <StaticImage
          src="../../images/vnospinari0/DSC_3696.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="WIDE_COMPOSITION_BW"
          className="image"
        />
        <StaticImage
          src="../../images/vnospinari0/DSC_4254.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="horizontal_compisition"
          className="image"
        />
        <StaticImage
          src="../../images/vnospinari0/DSC_4332.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="horizontal_compisition"
          className="image-main"
        />
        <StaticImage
          src="../../images/vnospinari0/flat-2-3d.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="horizontal_compisition"
          className="image-main"
        />
        <StaticImage
          src="../../images/vnospinari0/hand_chain_web3.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="horizontal_compisition"
          className="image-main"
        />
        <StaticImage
          src="../../images/vnospinari0/collage.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="horizontal_compisition"
          className="image-main"
        />
      </div>
    </div>

    <div className="color-text page-text-area">

      <p className="my-0 child">a chain - begins / ends</p>
      <p className="my-0 child">a body as its closure</p>
      <p className="my-0 child">a bridge linking selves</p>
      <p className="my-0 child">the primary shapes</p>
      <p className="my-0 child">circle _ triangle then square</p>
      <p className="my-0 child">square _ triangle then circle</p>

      <p className="color-title page-title my-2">
        <span className="text">[ _vnospinari0 ]</span>
      </p>

      <p className="my-0 child">the twisted ladder</p>
      <p className="my-0 child">thorns resemble calls</p>
      <p className="my-0 child">calls resemble wounds</p>
      <p className="my-0 child">wounds resemble rhythms</p>
      <p className="my-0 child">rhythms resemble thorns</p>
      <p className="my-0 child">&nbsp;</p>
    </div>
  </Layout>
)

export default Page

export const Head = () => (
    <Seo title="_vnospinari0" />
)
