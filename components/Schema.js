import Head from 'next/head'

const Schema = ({ post }) => {
  const { title, description, date, slug } = post
  const site = 'https://www.aqibs.me'
  return (
    <Head>
      <script type='application/ld+json'>{`
    {
      "@context":"https://schema.org/",
      "@type":"Article",
      "name":"${title}",
      "headline":"${title}",
      "about": "${description}",
      "author": { "@type": "Person", "name": "Aqib Suhail" },
      "publisher": { "@id": "${site}" },
      "image":"${site}/favicon.ico"
      "datePublished": "${date}",
      "description": "${description}",
      "inLanguage": "English",
      "mainEntityOfPage": "${site}posts/${slug}",
      "url": "${site}posts/${slug}",
    }
    `}</script>
    </Head>
  )
}

export default Schema
