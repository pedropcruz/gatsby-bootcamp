import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return(
    <Layout>
      <Head title="About" />
      <h1>About Page</h1>
      <p>Happy developer from Sintra with 5 years of experience.</p>
      <p>You can reach me on <Link to="/contact">contact page</Link></p>
    </Layout>
  )
}

export default AboutPage
