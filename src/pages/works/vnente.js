import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import { Seo } from "../../components/seo"

const Page = () => (
  <Layout>
    <div className="slide-image-container">
      <div className="slide-image">
        <div className="slide-empty-box"></div>
        <StaticImage
          src="../../images/egg-frame.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="egg-frame"
        />
        <StaticImage
          src="../../images/egg-shirt.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="egg-shirt"
        />
        <StaticImage
          src="../../images/egg_touch_chest.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="egg_touch_chest"
        />
        <StaticImage
          src="../../images/DSC08494_BW.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="DSC08494_BW"
          />
      </div>
    </div>

    <div className="color-text py-5">
      <p className="color-title">[ _vnente ]</p>
      <p className="my-0">The shaping of an oval form through an empirical / alchemical approach .</p>
      <p className="my-0 pt-4">The experimenting while looking for the minimum balance of the base of the human figure , in movement , has led to the carving out of the negative egg and the subsequent cut of the two halves, relating to the anatomical detail of the arch of the foot .</p>
      <p className="my-0 pt-4">The gesture has led to the definition of a form that now seems to be calling to be handled , twisted within its irregular split axes , while interrupting the magnetic forces holding together the two halves .</p>
      <p className="my-0 pt-4">Thus revealing the third ear within .</p>
      <p className="my-0">The third ear stands alone aside .</p>
      <p className="my-0">The third ear is held as a complementary form within the partial egg .</p>
      <p className="my-0">The egg might be magnetically attracted to its complementary , partial , hidden form , at the diaphragm’s height .</p>
      <p className="my-0">Symbolically closer to the diaphragm , its inner sound .</p>
      <p className="my-0">To be auscultated .</p>
    </div>
  </Layout>
)

export default Page

export const Head = () => (
    <Seo title="_vnente" />
)
