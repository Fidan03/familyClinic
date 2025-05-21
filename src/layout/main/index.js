import Gallery from '@/components/mainSections/gallery'
import LatestUpdates from '@/components/mainSections/latestUpdates'
import MeetOurDoctor from '@/components/mainSections/meetOurDoctor'
import Services from '@/components/mainSections/services'
import React from 'react'

const Main = () => {
  return (
    <div>

    <section >
      <Services/>
    </section>

      <section>
        <MeetOurDoctor/>
      </section>

      <section>
        <LatestUpdates/>
      </section>

      <section>
        <Gallery/>
      </section>

    </div>
  )
}

export default Main