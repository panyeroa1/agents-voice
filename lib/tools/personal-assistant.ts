/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { FunctionCall } from '../state';
import { FunctionResponseScheduling } from '@google/genai';

export const personalAssistantTools: FunctionCall[] = [
  {
    name: 'create_calendar_event',
    description: 'Schedules a new event in the user\'s calendar. Requires a summary (title), the location, and the start and end times in ISO 8601 format.',
    parameters: {
      type: 'OBJECT',
      properties: {
        summary: {
          type: 'STRING',
          description: 'The title or short description of the event.',
        },
        location: {
          type: 'STRING',
          description: 'The physical location or link for the event.',
        },
        startTime: {
          type: 'STRING',
          description: 'The start time of the event in ISO 8601 format (e.g., 2024-12-31T10:00:00Z).',
        },
        endTime: {
          type: 'STRING',
          description: 'The end time of the event in ISO 8601 format (e.g., 2024-12-31T11:00:00Z).',
        },
      },
      required: ['summary', 'startTime', 'endTime'],
    },
    isEnabled: true,
    scheduling: FunctionResponseScheduling.INTERRUPT,
  },
  {
    name: 'send_email',
    description: 'Composes and sends an email to a specific recipient. Requires the recipient\'s email address, a subject line, and the body content of the email.',
    parameters: {
      type: 'OBJECT',
      properties: {
        recipient: {
          type: 'STRING',
          description: 'The email address of the recipient.',
        },
        subject: {
          type: 'STRING',
          description: 'The subject line of the email.',
        },
        body: {
          type: 'STRING',
          description: 'The main content or body of the email message.',
        },
      },
      required: ['recipient', 'subject', 'body'],
    },
    isEnabled: true,
    scheduling: FunctionResponseScheduling.INTERRUPT,
  },
  {
    name: 'set_reminder',
    description: 'Sets a timed reminder for a specific task. Requires a description of the task and the time for the reminder in ISO 8601 format.',
    parameters: {
      type: 'OBJECT',
      properties: {
        task: {
          type: 'STRING',
          description: 'The description of the task to be reminded about.',
        },
        time: {
          type: 'STRING',
          description: 'The time when the reminder should trigger, in ISO 8601 format.',
        },
      },
      required: ['task', 'time'],
    },
    isEnabled: true,
    scheduling: FunctionResponseScheduling.INTERRUPT,
  },
];
