/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // nodesSidebar: [{type: 'autogenerated', dirName: '.'}],

  main: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started',
        'getting-started/architecture',
        'getting-started/install'
      ],
    },
    {
      type: 'category',
      label: 'Node Architecture',
      items: [
        'custom-nodes/custom-nodes',
        'custom-nodes/data-container',
        'custom-nodes/manifest',
        'custom-nodes/creating-custom-node',
        'custom-nodes/custom-category',
        'custom-nodes/contributing-nodes'
      ],
    },
   
   
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'nodes/introduction', 
             ],
     },
   
    {
      type: 'category',
      label: 'Advanced Usage',
      items: [
        'advanced-usage/small-memory',
        {
          type: 'category',
          label: 'Active Feedback Control',
          items: [
            'advanced-usage/feedback-control/active-feedback',
            'advanced-usage/feedback-control/model-systems',
            'advanced-usage/feedback-control/pid'
          ],
        },
      ]
    },
   
     {
        type: 'category',
          label: 'Node Examples',
           items:[
            
       {
        type: 'category',
          label: 'AI & ML',
           items:[
          {
          type: 'category',
          label: 'Object detection',
           items:['nodes/AI-ML/object-detection/YOLOv3'
                 ],
           },
            
          {
          type: 'category',
          label: 'Regressions',
           items:['nodes/AI-ML/regressions/LEAST_SQUARES'
                 ],
           },
                      {
          type: 'category',
          label: 'Casting',
           items:['nodes/AI-ML/regressions/ONE_HOT_ENCODING'
                 ],
           },
                ]
        },
       {
        type: 'category',
          label: 'Extractors',
           items:[
          {
          type: 'category',
          label: 'Files',
           items:['nodes/extractors/files/OPEN_CSV'
                 ],
           },
                ]
        },
      {
        type: 'category',
          label: 'Instruments',
           items:[
          {
          type: 'category',
          label: 'Keithley',
           items:['nodes/instruments/keithley/IV_CURVE'
                 ],
           },
          {
          type: 'category',
          label: 'LabJack',
           items:['nodes/instruments/labjack/U3'
                 ],
           },
            
                ]
        },
      {
        type: 'category',
          label: 'Loaders',
           items:[
          {
          type: 'category',
          label: 'Frontier',
           items:['nodes/loaders/frontier/MEASUREMENT_UPLOAD',
                  'nodes/loaders/frontier/IMAGE_UPLOAD',
                  'nodes/loaders/frontier/TIME_SERIES_STREAM'
                 ],
           },
                ]
        },
            
      {
        type: 'category',
          label: 'Logic gates',
           items:[
                  'nodes/logic-gates/looping',
                  'nodes/logic-gates/forloop',
                  'nodes/logic-gates/whileloop',
                 ],
      },
            
      {
        type: 'category',
          label: 'Transformers',
           items:[
          {
          type: 'category',
          label: 'Casting',
           items:['nodes/transformers/casting/DF_TO_MAT',
                  'nodes/transformers/casting/MAT_TO_DF',
                  'nodes/transformers/casting/STR_TO_FLOAT',
                  'nodes/transformers/casting/FLOAT_TO_INT',
                 ],
           },
          {
          type: 'category',
          label: 'Arithmetic',
           items:['nodes/transformers/arithmetic/ADD/ADD',
                  'nodes/transformers/arithmetic/SUBTRACT',
                  'nodes/transformers/arithmetic/MULTIPLY',
                  'nodes/transformers/arithmetic/DIVIDE',
                  'nodes/transformers/arithmetic/ABSOLUTE',
                 ],
           },
            
                      {
          type: 'category',
          label: 'Calculus',
           items:['nodes/transformers/calculus/INTEGRATE',
                  'nodes/transformers/calculus/DIFFERENTIATE',
                 ],
           },
            
          {
          type: 'category',
          label: 'DSP',
           items:['nodes/transformers/DSP/FIR'
                 ],
           },
            
                ]
        },
  ],
},
  ]   
};
module.exports = sidebars;
