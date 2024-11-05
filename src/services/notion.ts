'use server'

export async function getProducts() {
  const databaseId = '120a2d3a29aa80aea6c5cb6b1eed867e'

  const response = await fetch(
    `https://api.notion.com/v1/databases/${databaseId}/query`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sorts: [
          {
            property: 'status',
            direction: 'descending',
          },
          {
            property: 'description',
            direction: 'ascending',
          },
        ],
      }),
      next: { revalidate: 3600 },
    },
  )

  const data = await response.json()
  const typedResponse = data as unknown as NotionDatabaseResponse

  const products = typedResponse.results.map((product) => {
    return {
      status: product.properties.status.select.name,
      category: product.properties.category.select.name,
      price: product.properties.price.number,
      image: product.properties.image.files[0].file.url,
      description: product.properties.description.title[0].plain_text,
    }
  })

  return products
}
