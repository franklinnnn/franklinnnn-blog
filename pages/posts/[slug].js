import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import styles from "@/styles/Slug.module.css";
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineArrowLeft } from "react-icons/hi";

const graphcms = new GraphQLClient(
  "https://api-us-west-2.hygraph.com/v2/clczis6234h0001ukhnlr6jmk/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      datePublished
      slug
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({ post }) {
  return (
    <>
      <Nav />

      <main className={styles.blog}>
        <div className={styles.blog__container}>
          <div className={styles.title}>
            <h2>{post.title}</h2>
            <h3>
              <AiOutlineCalendar /> {post.datePublished}
            </h3>
            {/* <Image
              src={post.coverPhoto.url}
              className={styles.cover}
              alt={post.title}
            /> */}
            <img
              src={post.coverPhoto.url}
              className={styles.cover}
              alt={post.title}
            />
          </div>

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          ></div>
          {/* <div className={styles.back}>
            <a href="javascript:history.go(-1)">
              <HiOutlineArrowLeft /> <span>Back</span>
            </a>
          </div> */}
        </div>

        <Footer />
      </main>
    </>
  );
}
