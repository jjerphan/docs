import React from 'react';

export default function AppendixSection({children, index, folderPath}) {

  const sections = [
    'Theory and technical notes',
    'Parts list and drivers',
    'Media'
  ];

  const boilerplate = [
    'No theory or technical notes have been contributed for this node yet.',
    'This node does not require any peripheral hardware to operate. Please see INSTRUMENTS for nodes that interact with the physical world through connected hardware.',
    'No supporting screenshots, photos, or videos have been added to the media.md file for this node.'
  ];

  const ROOT = 'https://github.com/flojoy-io/docs/tree/main/docs/nodes';

  const fileNames = ['notes.md', 'hardware.md', 'media.md'];
  const sectionStyle = {display: 'inline-block', cursor: 'pointer'};
  const SECTION = sections[index];
  const HREF = ROOT + folderPath + fileNames[index];

  return (
    <>
        <br></br>
        <details>
            <summary><span style={sectionStyle}><h3>{SECTION}</h3></span></summary>
            {children === undefined ? children : boilerplate[index]}
            <br></br>
            <small><i><a href={HREF}>Edit {fileNames[index]} on GitHub</a></i></small>
        </details>
        <hr></hr>
    </>
  );
}