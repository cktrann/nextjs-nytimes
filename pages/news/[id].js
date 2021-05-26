import Layout from "../../components/layout";
import Container from '../../components/container'
import Row from '../../components/row'
import Col from '../../components/col'
import Image from 'next/image'
import Heading from'../../components/heading'

import { getAllPostSlugs, getSinglePostData } from '../../lib/api'

export async function getStaticPaths() {
    const allPostSlugs = await getAllPostSlugs()

    const paths = allPostSlugs.edges.map(edge => {
        const { slug } = edge.node
        return {
            params: {
                id: slug
            }
        }
    })
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({ params }) {
    const singlePostData = await getSinglePostData(params.id)

    return {
        props: {
            singlePostData
        }
    }
}

export default function SingleNews({singlePostData}) {
    const {title, author, content, featuredImage} =singlePostData
    return (
        <Layout>
            <Container pinchContent>
                <Row>
                    <Col>
            {
                featuredImage &&
                        <Image
                            src={featuredImage.node.sourceUrl}
                            alt={featuredImage.node.altText}
                            width={featuredImage.node.mediaDetails.width}
                            height={featuredImage.node.mediaDetails.height}
                        />
            }
            <Heading type="h1">{title}</Heading>
            <Heading type="h2"> By {author.node.name} </Heading>
            <div dangerouslySetInnerHTML={{ __html: content}}/>
                </Col>
            </Row>
        </Container>
        </Layout>
    )
}
