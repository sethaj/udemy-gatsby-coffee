import React from 'react'
import {Link} from 'gatsby'
import Title from '../Global/Title'

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb 5">
I'll alert the crew. Why don't we just give everybody a promotion and call it a night - 'Commander'? Maybe we better talk out here; the observation lounge has turned into a swamp. Wait a minute - you've been declared dead. You can't give orders around here. They were just sucked into space. I guess it's better to be lucky than good.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
