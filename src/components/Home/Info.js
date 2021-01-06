import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              corrupti quibusdam reiciendis harum doloremque debitis obcaecati,
              inventore in vero eius accusantium quos aliquam modi quo delectus
              deleniti dolor aperiam ratione enim! Inventore, itaque, porro
              laudantium rerum, tenetur vel quisquam veniam enim consequatur
              praesentium sapiente tempore deserunt magnam vitae facere eos!
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">about</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
