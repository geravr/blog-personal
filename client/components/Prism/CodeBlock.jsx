import { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import codeStyle from "react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic";

import style from "./CodeBlock.module.scss";

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  };

  static defaultProps = {
    language: null,
  };

  render() {
    const { language, value } = this.props;
    return (
      <div className={style.code}>
        <SyntaxHighlighter language={language} style={codeStyle}>
          {value}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default CodeBlock;
