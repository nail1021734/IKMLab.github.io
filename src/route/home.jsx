import React from 'react'
import ReactDOM from 'react-dom'
import Layout from 'src/component/Layout.jsx'
import Banner from 'src/component/Banner.jsx'
import Intro from 'src/component/Intro.jsx'
import Contact from 'src/component/Contact.jsx'

ReactDOM.render(
    <Layout>
      <Banner/>
      <Intro/>
      <Contact/>
    </Layout>,
    document.getElementById('root'))
