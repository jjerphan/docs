[//]: # 'Custom component imports'

import DocString from '@site/src/components/DocString';
import PythonCode from '@site/src/components/PythonCode';
import AppDisplay from '@site/src/components/AppDisplay';
import SectionBreak from '@site/src/components/SectionBreak';
import AppendixSection from '@site/src/components/AppendixSection';
import LoomEmbedder from '@site/src/components/LoomEmbedder';

[//]: # 'Docstring'

import DocstringSource from '!!raw-loader!./a1-[autogen]/docstring.txt';
import PythonSource from '!!raw-loader!./a1-[autogen]/python_code.txt';

<DocString>{DocstringSource}</DocString>
<PythonCode GLink='LOADERS/LOCAL_FILE_SYSTEM/BATCH_PROCESSOR/BATCH_PROCESSOR.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # 'Examples'

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';
import outputImg from './examples/EX1/output.jpeg'
import appImg from './examples/EX1/app.jpeg'

<AppDisplay 
    nodeLabel='BATCH_PROCESSOR'
    appImg={appImg}
    outputImg={outputImg}
    >
{App1}
</AppDisplay>

<Example1 />

<SectionBreak />

[//]: # 'Appendix'

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/LOADERS/LOCAL_FILE_SYSTEM/BATCH_PROCESSOR/appendix/'><Notes/></AppendixSection>

<AppendixSection index={1} folderPath='nodes/LOADERS/LOCAL_FILE_SYSTEM/BATCH_PROCESSOR/appendix/'><Hardware/></AppendixSection>

<AppendixSection index={2} folderPath='nodes/LOADERS/LOCAL_FILE_SYSTEM/BATCH_PROCESSOR/appendix/'><Media/></AppendixSection>
