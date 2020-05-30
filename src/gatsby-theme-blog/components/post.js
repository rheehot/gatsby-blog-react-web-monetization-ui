import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import PostTitle from "gatsby-theme-blog/src/components/post-title"
import PostDate from "gatsby-theme-blog/src/components/post-date"
import PostFooter from "gatsby-theme-blog/src/components/post-footer"
import PostHero from "gatsby-theme-blog/src/components/post-hero"

import Monetized from "../../components/monetized"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO
      title={post.title}
      description={post.excerpt}
      imageSource={
        post.socialImage
          ? post.socialImage?.childImageSharp?.fluid.src
          : post.image?.childImageSharp?.fluid.src
      }
      keywords={post.keywords}
      imageAlt={post.imageAlt}
    />
    <Helmet>
      <meta name="monetization" content="$ilp.uphold.com/2PPi8NqfxD2b" />
    </Helmet>
    <main>
      <PostHero post={post} />
      <PostTitle>{post.title}</PostTitle>
      <PostDate>{post.date}</PostDate>
      <MDXProvider components={{ Monetized }}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </main>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
