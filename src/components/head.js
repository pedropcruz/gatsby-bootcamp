import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = props => {

  const { site: { siteMetadata: { title } } } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <Helmet title={`${ props.title } | ${title}`} />
  )
}

export default Head
