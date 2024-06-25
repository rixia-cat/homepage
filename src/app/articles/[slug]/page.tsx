export default function ArticlePage({ params }: { params: { slug: string } }) {
    return <div className="flex-grow w-full">My Article: {params.slug}</div>
}