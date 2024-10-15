'use server'

import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export async function getProducts() {
  const databaseId = '120a2d3a29aa80aea6c5cb6b1eed867e'

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'status',
      select: {
        equals: 'active',
      },
    },
  })

  const typedResponse = response as unknown as NotionDatabaseResponse

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
