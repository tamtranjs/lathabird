import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FiArrowRight} from "react-icons/fi";

interface Props {
  content: any;
}

const Bold = ({ children }: any) => <strong className="">{children}</strong>;
const Text = ({ children }: any) => <p className="">{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <Bold key={`${text}-key`}>{text}</Bold>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
    [BLOCKS.HEADING_2]: (node: any, children: any) => <h2 className="text-secondary">{children}</h2>,
    [BLOCKS.QUOTE]: (node: any, children: any) => <blockquote className="text-slate-400 italic border-x-4 border-primary rounded-ss-xl rounded-ee-xl mt-3 p-3">{children}</blockquote>,
    [INLINES.HYPERLINK]: (node: any, children: any) => <>
      <FiArrowRight className="inline-block mr-1 text-primary" />
      <a href={node.data.uri} target="_blank" className="text-primary">{children}</a>
    </>
  },
  // renderText: (text: any) => text.replace('br', 'xxx'),
  preserveWhitespace: true
};

export default function RichText({ content }: Props) {
  return (
    <article className="space-y-3">
      {documentToReactComponents(content, options)}
    </article>
  )
}
