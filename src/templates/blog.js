import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query($slug: String!){
    contentfulBlogPost( slug: { eq: $slug } ) {
      title
      publishedDate(formatString: "LL", locale: "pt")
      body {
        json
      }
    }
  }
`

const Blog = props => {

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  const { title, publishedDate, body: { json } } = props.data.contentfulBlogPost
  return (
    <Layout>
      <Head title={title} />
      <h1>{ title }</h1>
      <p>{ publishedDate }</p>
      {documentToReactComponents(json, options)}
    </Layout>
  )
}

export default Blog
