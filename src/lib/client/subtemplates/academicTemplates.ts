export const academicTemplates=  {
    category: "Academic",
    icon: "🎓",
    templates: [
      {
        title: "Research Paper (APA)",
        description: "APA 7th edition formatted research paper template.",
        subtitle: "APA Format • Citations • Bibliography",
        imageUrl:"/notesScreenshot/research.png",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Title of Your Research Paper' }]
            },
            {
              type: 'paragraph',
              content: [
                { type: 'text', text: 'Your Name' },
                { type: 'hardBreak' },
                { type: 'text', text: 'Institution Name' },
                { type: 'hardBreak' },
                { type: 'text', text: 'Course Number: Course Name' },
                { type: 'hardBreak' },
                { type: 'text', text: 'January 23, 2026' }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Abstract' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'A brief summary of your research paper (150-250 words).' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Introduction' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Introduce your topic and state your thesis.' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Literature Review' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Review relevant research and cite sources (Author, Year).' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Methodology' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Describe your research methods.' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Results' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Present your findings.' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'References' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'List all sources in APA format.' }]
            }
          ]
        }
      },
      {
        title: "Essay Outline",
        description: "Structured outline for academic essays.",
        subtitle: "Thesis • Body Paragraphs • Conclusion",
        imageUrl:"/notesScreenshot/essay.png",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Essay Outline' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'I. Introduction' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Hook: Opening statement' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Background information' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Thesis statement:' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'II. Body Paragraph 1' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Topic sentence:' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Evidence:' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Analysis:' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'III. Body Paragraph 2' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Topic sentence:' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Evidence:' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Analysis:' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'IV. Conclusion' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Restate thesis' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Summarize main points' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Final thoughts' }] }] }
              ]
            }
          ]
        }
      },
// ... (previous categories: Business and Personal already provided)

// ===== ACADEMIC CATEGORY (continued) =====
      {
        title: "Lab Report",
        description: "Scientific lab report with hypothesis and results.",
        subtitle: "Hypothesis • Methods • Data • Analysis",
        imageUrl:"/notesScreenshot/labreport.png",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Lab Report' }]
            },
            {
              type: 'paragraph',
              content: [
                { type: 'text', marks: [{ type: 'bold' }], text: 'Name: ' },
                { type: 'text', text: 'Your Name' }
              ]
            },
            {
              type: 'paragraph',
              content: [
                { type: 'text', marks: [{ type: 'bold' }], text: 'Date: ' },
                { type: 'text', text: 'January 23, 2026' }
              ]
            },
            {
              type: 'paragraph',
              content: [
                { type: 'text', marks: [{ type: 'bold' }], text: 'Course/Subject: ' }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Title' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Descriptive title of the experiment' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Objective / Aim' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'What are you trying to achieve or prove?' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Hypothesis' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'If… then… because…' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Materials' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Item 1' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Item 2' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Procedure / Method' }]
            },
            {
              type: 'orderedList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Step 1' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Step 2' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Results / Observations' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Raw data, tables, graphs, descriptions...' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Analysis / Discussion' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Explain what the results mean. Was the hypothesis supported?' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Conclusion' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Summary of findings and implications' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'References' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: '(if any sources were used)' }]
            }
          ]
        }
      },
      {
        title: "Bibliography",
        description: "Clean APA-style reference list builder.",
        subtitle: "APA 7th • Alphabetized • Hanging indent",
        imageUrl:"/notesScreenshot/references.png",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'References' }]
            },
            {
              type: 'paragraph',
              content: [
                { type: 'text', marks: [{ type: 'italic' }], text: '(List in alphabetical order by author’s last name)' }
              ]
            },
            {
              type: 'paragraph',
              content: [
                { type: 'text', text: 'Author, A. A. (Year). ' },
                { type: 'text', marks: [{ type: 'italic' }], text: 'Title of work.' },
                { type: 'text', text: ' Publisher. DOI or URL' }
              ]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Add your first reference here ↑' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: '—' }]
            },
            {
              type: 'paragraph',
              content: [
                { type: 'text', text: 'Author, B. B., & Author, C. C. (Year). ' },
                { type: 'text', marks: [{ type: 'italic' }], text: 'Article title.' },
                { type: 'text', text: ' ' },
                { type: 'text', marks: [{ type: 'italic' }], text: "Journal Name, volume'(issue)," },
                { type: 'text', text: ' page range. https://doi.org/xxxx' }
              ]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Tip: Use hanging indent (second line indented)' }]
            }
          ]
        }
      }
    ]
  }