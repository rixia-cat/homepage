export default function ArticlePage({ params }: { params: { slug: string } }) {
    return <div>My Article: {params.slug}</div>
}