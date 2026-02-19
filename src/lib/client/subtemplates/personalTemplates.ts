export const personalTemplates= {
    category: "Personal",
    icon: "✨",
    templates: [
      {
        title: "Daily Journal",
        description: "Reflective daily journal with gratitude and intention prompts.",
        subtitle: "Gratitude • Reflections • Mood Tracking",
        imageUrl:"/notesScreenshot/DailyJournal.png",
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
        imageUrl:"/notesScreenshot/todo.png",
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
        imageUrl:"/notesScreenshot/weeklyplanner.png",
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
        imageUrl:"/notesScreenshot/habitTracker.png",
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
  }