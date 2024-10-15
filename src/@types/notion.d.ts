interface Title {
  plain_text: string
}

interface Description {
  id: string
  title: Title[]
}

interface FileUrl {
  url: string
  expiry_time: string
}

interface File {
  file: FileUrl
}

interface Image {
  id: string
  files: File[]
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

interface Properties {
  status: Status
  category: Category
  price: Price
  image: Image
  description: Description
}

interface Result {
  id: string
  properties: Properties
}

interface NotionDatabaseResponse {
  results: Result[]
}
