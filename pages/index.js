import config from "../blog.config"
import Wrapper from "../src/layout/Wrapper"
import Posts from "../src/views/Posts"
import { getAllPosts } from "../src/api"

const PostsPage = ({ posts, prevPosts, nextPosts }) => (
  <Wrapper url="/" title={config.title} description={config.description}>
    <Posts posts={posts} prevPosts={prevPosts} nextPosts={nextPosts} />
  </Wrapper>
)

export async function getStaticProps() {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ])

  const startIndex = 0
  const endIndex = config.postsPerPage
  const prevPosts = null
  const nextPosts = endIndex >= posts.length ? null : 1

  return {
    props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
  }
}

export default PostsPage
