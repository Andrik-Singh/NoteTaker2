export interface TemplateItem {
  title: string;
  description: string;
  subtitle: string; 
  initialContent: any; 
  imageUrl?:string;
}
interface TemplateCategory {
  category: string;
  icon?: string; 
  templates: TemplateItem[];
}
export const templateCategories: TemplateCategory[] = [
  {
    category: "Business",
    icon: "💼",
    templates: [
      {
        title: "Meeting Notes",
        description: "Structured template for capturing meeting discussions and action items.",
        subtitle: "Agenda • Attendees • Action Items",
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
  },
  // ===== PERSONAL CATEGORY =====
  {
    category: "Personal",
    icon: "✨",
    templates: [
      {
        title: "Daily Journal",
        description: "Reflective daily journal with gratitude and intention prompts.",
        subtitle: "Gratitude • Reflections • Mood Tracking",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Daily Journal - January 23, 2026' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: '🌅 Morning Intentions' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', marks: [{ type: 'bold' }], text: 'Today I will focus on:' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Priority 1' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Priority 2' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Priority 3' }] }] }
              ]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', marks: [{ type: 'bold' }], text: "I'm grateful for:" }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph' }] },
                { type: 'listItem', content: [{ type: 'paragraph' }] },
                { type: 'listItem', content: [{ type: 'paragraph' }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: '📝 Throughout the Day' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Free-form thoughts and observations...' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: '🌙 Evening Reflection' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', marks: [{ type: 'bold' }], text: 'What went well today:' }]
            },
            {
              type: 'paragraph',
              content: []
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', marks: [{ type: 'bold' }], text: 'What I learned:' }]
            },
            {
              type: 'paragraph',
              content: []
            }
          ]
        }
      },
      {
        title: "To-Do List",
        description: "Interactive checklist with task priorities.",
        subtitle: "Priority Tasks • Checkboxes",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'To-Do List' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: '🔴 High Priority' }]
            },
            {
              type: 'taskList',
              content: [
                {
                  type: 'taskItem',
                  attrs: { checked: false },
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Important task 1' }] }]
                },
                {
                  type: 'taskItem',
                  attrs: { checked: false },
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Important task 2' }] }]
                }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: '🟡 Medium Priority' }]
            },
            {
              type: 'taskList',
              content: [
                {
                  type: 'taskItem',
                  attrs: { checked: false },
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Task 1' }] }]
                },
                {
                  type: 'taskItem',
                  attrs: { checked: false },
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Task 2' }] }]
                }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: '🟢 Low Priority' }]
            },
            {
              type: 'taskList',
              content: [
                {
                  type: 'taskItem',
                  attrs: { checked: false },
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Task 1' }] }]
                }
              ]
            }
          ]
        }
      },
      {
        title: "Weekly Planner",
        description: "Organized weekly schedule with goals and priorities.",
        subtitle: "Weekly Goals • Daily Tasks",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Weekly Planner' }]
            },
            {
              type: 'paragraph',
              content: [
                { type: 'text', marks: [{ type: 'bold' }], text: 'Week of: ' },
                { type: 'text', text: 'January 20-26, 2026' }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: '🎯 Weekly Goals' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Goal 1' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Goal 2' }] }] },
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Goal 3' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Monday' }]
            },
            {
              type: 'taskList',
              content: [
                {
                  type: 'taskItem',
                  attrs: { checked: false },
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Task' }] }]
                }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Tuesday' }]
            },
            {
              type: 'taskList',
              content: [
                {
                  type: 'taskItem',
                  attrs: { checked: false },
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Task' }] }]
                }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Wednesday' }]
            },
            {
              type: 'taskList',
              content: [
                {
                  type: 'taskItem',
                  attrs: { checked: false },
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Task' }] }]
                }
              ]
            }
          ]
        }
      },
      {
        title: "Habit Tracker",
        description: "Daily habit tracking with checkboxes.",
        subtitle: "Health • Wellness • Productivity",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Habit Tracker' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'January 23, 2026' }]
            },
            {
              type: 'heading',
              attrs: { level: 3 },
              content: [{ type: 'text', text: '💪 Health & Fitness' }]
            },
            {
              type: 'taskList',
              content: [
                {
                  type: 'taskItem',
                  attrs: { checked: false },
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Exercise (30 min)' }] }]
                },
                {
                  type: 'taskItem',
                  attrs: { checked: false },
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Drink 8 glasses of water' }] }]
                }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 3 },
              content: [{ type: 'text', text: '🧠 Mental Wellness' }]
            },
            {
              type: 'taskList',
              content: [
                {
                  type: 'taskItem',
                  attrs: { checked: false },
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Meditation (10 min)' }] }]
                },
                {
                  type: 'taskItem',
                  attrs: { checked: false },
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Journaling' }] }]
                }
              ]
            }
          ]
        }
      }
    ]
  },
  // ===== ACADEMIC CATEGORY =====
  {
    category: "Academic",
    icon: "🎓",
    templates: [
      {
        title: "Research Paper (APA)",
        description: "APA 7th edition formatted research paper template.",
        subtitle: "APA Format • Citations • Bibliography",
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
  },

  // ===== CREATIVE CATEGORY =====
  {
    category: "Creative",
    icon: "✍️",
    templates: [
      {
        title: "Story Outline",
        description: "Three-act structure outline for novels or short stories.",
        subtitle: "Characters • Plot Points • Acts",
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
  },

  // ===== COLLABORATIVE CATEGORY =====
  {
    category: "Collaborative",
    icon: "👥",
    templates: [
      {
        title: "Sprint Retrospective",
        description: "Classic agile retrospective format.",
        subtitle: "What went well • What to improve • Actions",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Sprint Retrospective' }]
            },
            {
              type: 'paragraph',
              content: [
                { type: 'text', marks: [{ type: 'bold' }], text: 'Sprint: ' },
                { type: 'text', text: '#XX – [Date range]' }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'What went well?' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Positive 1' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'What didn’t go well?' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Pain point 1' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'What puzzled us?' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Question / confusion' }] }] }
              ]
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
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Improvement – Owner – Due' }] }]
                }
              ]
            }
          ]
        }
      },
      {
        title: "Brainstorm",
        description: "Free-form idea generation session notes.",
        subtitle: "Ideas • Crazy 8s • Voting",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Brainstorm: [Topic]' }]
            },
            {
              type: 'paragraph',
              content: [
                { type: 'text', marks: [{ type: 'bold' }], text: 'Goal: ' }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Warm-up / Icebreaker' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Quick round-robin ideas...' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Core Ideas' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Idea 1' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Crazy / Wild Ideas' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Most out-there idea' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Top 3–5 Ideas (after voting)' }]
            },
            {
              type: 'orderedList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Winner' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Next Steps' }]
            },
            {
              type: 'taskList',
              content: [
                { type: 'taskItem', attrs: { checked: false }, content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Prototype / Research – Owner' }] }] }
              ]
            }
          ]
        }
      },
      {
        title: "Team Check-in",
        description: "Quick async team pulse / standup notes.",
        subtitle: "Wins • Blockers • Help Needed",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'Team Check-in – [Date]' }]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: '🎉 Wins / Progress' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Completed X' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: '🚧 Blockers / Challenges' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Stuck on Y because...' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: '🙋 Help / Input Needed' }]
            },
            {
              type: 'taskList',
              content: [
                {
                  type: 'taskItem',
                  attrs: { checked: false },
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Need feedback on Z' }] }]
                }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Mood / Energy Check' }]
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: '😊 / 😐 / 😓 – quick note' }]
            }
          ]
        }
      },
      {
        title: "SWOT Analysis",
        description: "Classic strategic planning framework.",
        subtitle: "Strengths • Weaknesses • Opportunities • Threats",
        initialContent: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: { level: 1 },
              content: [{ type: 'text', text: 'SWOT Analysis' }]
            },
            {
              type: 'paragraph',
              content: [
                { type: 'text', marks: [{ type: 'bold' }], text: 'For: ' },
                { type: 'text', text: '[Project / Product / Company / Person]' }
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
              content: [{ type: 'text', text: 'Strengths (internal, positive)' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Strong point 1' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Weaknesses (internal, negative)' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Area to improve' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Opportunities (external, positive)' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Market trend / gap' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Threats (external, negative)' }]
            },
            {
              type: 'bulletList',
              content: [
                { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Competitor move / risk' }] }] }
              ]
            },
            {
              type: 'heading',
              attrs: { level: 2 },
              content: [{ type: 'text', text: 'Key Takeaways / Strategy Ideas' }]
            },
            {
              type: 'taskList',
              content: [
                {
                  type: 'taskItem',
                  attrs: { checked: false },
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Leverage strength X to capture opportunity Y' }] }]
                }
              ]
            }
          ]
        }
      }
    ]
  }
];