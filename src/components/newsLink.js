import React from "react"
import { Link } from "gatsby"

const NewsLink = ({ news }) => (
  <div>
    <Link to={news.fields.slug}>
      {news.frontmatter.title} ({news.frontmatter.date})
    </Link>
  </div>
)

export default NewsLink
