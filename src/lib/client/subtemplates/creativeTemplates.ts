export const creativeTemplates={
    category: "Creative",
    icon: "✍️",
    templates: [
      {
        title: "Story Outline",
        description: "Three-act structure outline for novels or short stories.",
        subtitle: "Characters • Plot Points • Acts",
        imageUrl:"notesScreenshot/story.png",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Story Outline' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Working Title' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: '[Title]' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Genre & Tone' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'e.g. Fantasy • Dark & Atmospheric' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Main Characters' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', marks: [{ type: 'bold' }], text: 'Protagonist: ' }, { type: 'text', text: 'Name – goal – flaw' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', marks: [{ type: 'bold' }], text: 'Antagonist: ' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', marks: [{ type: 'bold' }], text: 'Supporting: ' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Act I – Setup' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Inciting Incident:' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Key Event 1:' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Act II – Confrontation' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Rising Action:' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Midpoint Twist:' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Dark Moment:' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Act III – Resolution' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Climax:' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Resolution:' }] }] }
              ]
            }
          ]
        }
      },
      {
        title: "Screenplay",
        description: "Basic screenplay format starter.",
        subtitle: "Scene Headings • Action • Dialogue",
        imageUrl:"/notesScreenshot/screenplay.png",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'SCREENPLAY TITLE' }]
            },
            {
              type: 'paragraph',
              content: [
                { type: 'text', marks: [{ type: 'bold' }], text: 'Written by ' },
                { type: 'text', text: 'Your Name' }
              ]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'FADE IN:' }]
            },
            {
              type: 'paragraph',
              content: [
                { type: 'text', marks: [{ type: 'bold' }], text: 'INT. LOCATION - DAY' }
              ]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Action lines describe what we SEE and HEAR.' }]
            },
            {
              type: 'paragraph',
              content: [
                { type: 'text', marks: [{ type: 'bold' }], text: 'CHARACTER NAME' }
              ]
            },
            {
              type: 'blockquote',
              content: [
                {
                  type: 'paragraph',
                  content: [{ type: 'text', text: 'Dialogue comes here.' }]
                }
              ]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: '(parenthetical)' }]
            },
            {
              type: 'blockquote',
              content: [
                {
                  type: 'paragraph',
                  content: [{ type: 'text', text: 'More dialogue.' }]
                }
              ]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'FADE OUT.' }]
            }
          ]
        }
      },
      {
        title: "Blog Post",
        description: "Modern blog article structure with headings and call-to-action.",
        subtitle: "Hook • Story • Takeaways",
        imageUrl:"/notesScreenshot/blog.png",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Blog Post Title – Catchy & Benefit-Driven' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', marks: [{ type: 'italic' }], text: 'Subtitle that promises value or creates curiosity' }]
            },
            {
              type: 'paragraph',
              content: [
                { type: 'text', marks: [{ type: 'bold' }], text: 'Introduction / Hook (2–4 sentences)' }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Section 1 – Main Point' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Explain, tell a story, give examples...' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Section 2 – Deeper Dive' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Tip / Step / Insight' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Conclusion & CTA' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Summarize key takeaway. Invite comment / share / subscribe.' }]
            }
          ]
        }
      },
      {
        title: "Article",
        description: "Long-form article / feature piece template.",
        subtitle: "Lead • Background • Analysis • Wrap-up",
        imageUrl:"/notesScreenshot/article.png",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Article Title' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', marks: [{ type: 'italic' }], text: 'Strong, engaging subhead' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Lead / Opening' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Compelling anecdote, statistic, question or scene...' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Background / Context' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'What the reader needs to understand first' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Main Body / Analysis' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Core argument, evidence, quotes, examples...' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Counterpoints (optional)' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Address potential objections' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Conclusion' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Final thought, implication, call to reflection/action' }]
            }
          ]
        }
      }
    ]
  }