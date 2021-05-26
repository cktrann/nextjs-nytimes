import Container from './container'
import Row from './row'
import Col from './col'

import Card from './card'

import styles from './section.module.scss'

export default function Section({children, name, posts}) {
    return (
        <section className={styles.section}>
            <Container>
            <Heading type="h2">{name}</Heading>
            <Row>
                {posts.edges.map((edge, index) => {
                    return <Col key={index}  sm={6} md={3}>
                <Card node={edge.node} />
            </Col>
            })}
        </Row>
        </Container>        
    </section>
    )
}