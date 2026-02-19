export const buisnessTemplates={
    category: "Business",
    icon: "💼",
    templates: [
      {
        title: "Meeting Notes",
        description: "Structured template for capturing meeting discussions and action items.",
        subtitle: "Agenda • Attendees • Action Items",
        imageUrl:"/notesScreenshot/meetingNotes.png",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Meeting Notes' }]
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
                { type: 'text', marks: [{ type: 'bold' }], text: 'Attendees: ' },
                { type: 'text', text: 'Add names here' }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Agenda' }]
            },
            {
              type: 'orderedList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Topic 1' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Topic 2' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Topic 3' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Discussion Notes' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Key points discussed...' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Action Items' }]
            },
            {
              type: 'taskList',
              content: [
                {
                  type: 'taskItem',
                  attrs: { checked: false },
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Action item 1 - Owner - Due date' }] }]
                },
                {
                  type: 'taskItem',
                  attrs: { checked: false },
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Action item 2 - Owner - Due date' }] }]
                }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Next Steps' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Next meeting: ' }]
            }
          ]
        }
      },
      {
        title: "Project Proposal",
        description: "Professional proposal template with executive summary and objectives.",
        subtitle: "Executive Summary • Objectives • Budget",
        imageUrl:"/notesScreenshot/projectProposal.png",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Project Proposal' }]
            },
            {
              type: 'paragraph',
              content: [
                { type: 'text', marks: [{ type: 'bold' }], text: 'Project Name: ' },
                { type: 'text', text: 'Enter project name' }
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
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Executive Summary' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Provide a brief overview of the project, its goals, and expected outcomes.' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Problem Statement' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Describe the problem or opportunity this project addresses.' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Objectives' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Objective 1' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Objective 2' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Objective 3' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Timeline' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Estimated start date: ' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Estimated completion date: ' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Budget' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Estimated budget: $' }]
            }
          ]
        }
      },
      {
        title: "One-Pager",
        description: "Concise single-page overview for projects or ideas.",
        subtitle: "Opportunity • Solution • Benefits",
        imageUrl:"/notesScreenshot/ProjectOnePager.png",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Project One-Pager' }]
            },
            {
              type: 'heading',
              attrs: { level: 3 },
              content: [{ type: 'text', text: 'The Opportunity' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'What problem are we solving? Why does it matter?' }]
            },
            {
              type: 'heading',
              attrs: { level: 3 },
              content: [{ type: 'text', text: 'Our Solution' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'How will we solve this problem? What makes our approach unique?' }]
            },
            {
              type: 'heading',
              attrs: { level: 3 },
              content: [{ type: 'text', text: 'Key Benefits' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Benefit 1' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Benefit 2' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Benefit 3' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 3 },
              content: [{ type: 'text', text: 'Success Metrics' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'How will we measure success?' }]
            }
          ]
        }
      },
      {
        title: "Status Report",
        description: "Weekly or monthly progress update template.",
        subtitle: "Accomplishments • In Progress • Blockers",
        imageUrl:"/notesScreenshot/StatusReport.png",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Status Report' }]
            },
            {
              type: 'paragraph',
              content: [
                { type: 'text', marks: [{ type: 'bold' }], text: 'Period: ' },
                { type: 'text', text: 'Week of January 23, 2026' }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Summary' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: "Brief overview of this period's progress." }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Accomplishments' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Completed task 1' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Completed task 2' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'In Progress' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Ongoing task 1' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Ongoing task 2' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Blockers & Risks' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Any challenges or concerns.' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Next Week' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Planned task 1' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Planned task 2' }] }] }
              ]
            }
          ]
        }
      }
    ]
  }