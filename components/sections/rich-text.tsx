import MarkdownRender from 'utils/MarkdownRender'

interface RichTextProps {
  data?: {
    content?: string
  }
}

const RichText = ({ data }: RichTextProps) => {
  return (
    <div className="container py-12 mx-auto px-4 sm:px-6 lg:px-8">
      <MarkdownRender>{data.content}</MarkdownRender>
    </div>
  )
}

export default RichText
