interface Text {
  plain_text: string
}

interface Description {
  id: string
  title: Text[]
}

interface Select {
  id: string
  name: string
  color: string
}

interface Category {
  id: string
  select: Select
}

interface Price {
  id: string
  number: number
}

interface Status {
  id: string
  select: Select
}

interface Photo {
  id: string
  rich_text: Text[]
}

interface Properties {
  status: Status
  category: Category
  price: Price
  photo: Photo
  description: Description
}

interface Result {
  id: string
  properties: Properties
}

interface NotionDatabaseResponse {
  results: Result[]
}
