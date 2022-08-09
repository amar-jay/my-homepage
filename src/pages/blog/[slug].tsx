import * as React from 'react';
import { Container } from '@chakra-ui/react';
import { SanityClient } from '../../../libs/sanity';
import SwiperCarousel from '../../components/layout/SwiperCarousel'
interface IArticle {
    posts: any;
}

const Article:React.FC<IArticle> =({posts}) => {
    return (
         <Container>
            <SwiperCarousel slides={["man", "shoe"]} pagination={{enabled: false}} scrollbar={{enabled:false}} />
            <article>
            {!!posts || "Not Found"}
            </article>
            </Container>
    );
}
export default Article;
// Server Side Rendered props
    type PathType = {
        params: {
            slug: string
        }
    };
export const getStaticPaths =async ({post}: {post:string}) => {
    let query = `*[_type == "post"][]{
  slug{
  current
}
}`
  
    //querying 
    const posts = await SanityClient.fetch(query);

    const paths: PathType= posts.map((post) => ({
      params: {
        slug: post.slug.current
      }}))

    return {paths, fallback: "blocking"}
  
  }

export const getStaticProps = async function({params}:PathType){
    const query = `*[_type == 'post'][]{
        title,
        slug,
        body,
        author ->,
        categories,
    }`

      //get Post with that slug
      const posts = await SanityClient.fetch(query,{})

      if (!posts) return { notFound: true }

    return {
        props:{
            posts,
        }
    }
}
