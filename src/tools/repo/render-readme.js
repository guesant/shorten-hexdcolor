import axios from 'axios';
import hljs from 'highlight.js/lib/highlight';
import hljsJS from 'highlight.js/lib/languages/javascript';
import hljsSH from 'highlight.js/lib/languages/shell';
import mdit from 'markdown-it';
// highlight.js themes
import 'highlight.js/styles/obsidian.css';

hljs.registerLanguage('javascript', hljsJS);
hljs.registerLanguage('sh', hljsSH);

const md = mdit({
  highlight: (str, lang) => {
    const hlpre = code => `<pre class="hljs"><code class="using-hljs">${code}</code></pre>`;

    if (lang && hljs.getLanguage(lang)) {
      try {
        return hlpre(hljs.highlight(lang, str, true).value);
      } catch (__) {
        console.error(__);
      }
    }

    return hlpre(md.utils.escapeHtml(str));
  },
});

export default async repo => axios.get(repo)
  .then(resp => resp.data)
  .then((data) => {
    const start = '## Install';
    const end = '## Build';

    const startPosition = data.indexOf(start);
    const endPosition = data.indexOf(end);

    return data.slice(startPosition, endPosition);
  })
  .then(data => md.render(data));
