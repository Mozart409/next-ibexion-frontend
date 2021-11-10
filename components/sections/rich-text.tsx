import MarkdownRender from 'utils/MarkdownRender'

interface RichTextProps {
  data?: {
    content?: string
  }
}

const RichText = ({ data }: RichTextProps) => {
  return (
    <div className="container py-12 px-4 mx-auto sm:px-6 lg:px-8">
      <MarkdownRender>{data.content}</MarkdownRender>
    </div>
  )
}

export default RichText
