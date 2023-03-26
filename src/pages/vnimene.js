import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div className="container px-5 color-text">
      <StaticImage
        src="../images/D85_7973.jpg"
        layout="fullWidth"
        quality={95}
        formats={["AUTO", "WEBP"]}
        alt="D85_7973"
        className="img-fluid"
      />
      <h2 className="color-title py-4">_vnimene</h2>
      <p className="my-0">a membrane describing the first need for the daily ritual contact with one’s skin</p>
      <p className="my-0 pb-5">the organic details embody a condition of liquid, hidden, intimate</p>
      <p className="my-0">the study of a shirt that unfolds bi-dimensionally</p>
      <p className="my-0">tracing a continuous line on a single piece that favours the fold [curve] to the radical [straight] cut</p>
      <p className="my-0 pb-5">an erfonomic romance</p>
      <h5 className="color-title py-4">vnimene [construction]</h5>
      <p className="my-0">volumes are altered to visualise , in three dimensions , the structures</p>
      <p className="my-0">that historically distinguish the shirt object</p>
      <p className="my-0 pb-4">-re-engineered :</p>
      <p className="my-0">the neck</p>
      <p className="my-0 pb-4">_ strictly closed _ reveals its front end , east [the model without collar] meeting west [the model with collar] in a complementary volume, created through an external / internal continuum fold construction</p>
      <p className="my-0">the closure</p>
      <p className="my-0 pb-4">_ through the partial placket _ linking to the neck itself and clavicle [ origami detail ] a micro sequence of pleats , controlling the curve - gravitational entity</p>
      <p className="my-0">the wrist</p>
      <p className="my-0">_ repositioned higher _ reveals itself within its hand in motion highlighted by the spiral construction</p>
      <p className="my-0 pb-4">[ origami detail ] a micro sequence of pleats , controlling the curve - lateral entity</p>
      <p className="my-0">the final perimeter</p>
      <p className="my-0 pb-4">_ through the side hems _ hugs the torso</p>
      <p className="my-0 pb-5">hand stitching reveals the stitch . machine stitching conceals the stitch</p>
      <div className="text-center pb-5">
        <StaticImage
          src="../images/shirt_grey.png"
          // layout="fullWidth"
          width={600}
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="shirt_grey"
          className="img-fluid mx-5"
        />
      </div>
    </div>
  </Layout>
)

export default SecondPage

export const Head = () => (
    <Seo title="_vnimene" />
)
