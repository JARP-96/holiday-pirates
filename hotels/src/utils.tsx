export const germanDateFormat = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export const ConvertStringToHTML = (str: string) => {
  let parser = new DOMParser()
  let doc = parser.parseFromString(str, 'text/html')
  return doc.body
}
