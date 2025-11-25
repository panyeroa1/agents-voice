/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { FunctionResponseScheduling } from '@google/genai';
import { FunctionCall } from './state';

export const AVAILABLE_TOOLS: FunctionCall[] = [
  {
    name: 'start_return',
    description: 'Initiates a return request for a purchased item. This tool requires the order ID, the name of the item to be returned, and the reason for the return to process the request.',
    parameters: {
      type: 'OBJECT',
      properties: {
        orderId: {
          type: 'STRING',
          description: 'The unique identifier for the order containing the item to be returned.',
        },
        itemName: {
          type: 'STRING',
          description: 'The name of the specific item the user wishes to return.',
        },
        reason: {
          type: 'STRING',
          description: 'The reason why the user is returning the item (e.g., damaged, wrong size, changed mind).',
        },
      },
      required: ['orderId', 'itemName', 'reason'],
    },
    isEnabled: true,
    scheduling: FunctionResponseScheduling.INTERRUPT,
  },
  {
    name: 'get_order_status',
    description: 'Retrieves the current status of an order. This tool can search using the order ID. If the order ID is not available, it can search using the customer\'s name and email address.',
    parameters: {
      type: 'OBJECT',
      properties: {
        orderId: {
          type: 'STRING',
          description: 'The unique identifier for the order. Ask for this first.',
        },
        customerName: {
          type: 'STRING',
          description: 'The full name of the customer, used if the order ID is not known.',
        },
        customerEmail: {
          type: 'STRING',
          description: 'The email address of the customer, used if the order ID is not known.',
        },
      },
    },
    isEnabled: true,
    scheduling: FunctionResponseScheduling.INTERRUPT,
  },
  {
    name: 'speak_to_representative',
    description: 'Escalates the conversation to a human customer support representative. Use this tool when the AI cannot resolve the issue or when the user explicitly requests a human agent. A reason for the escalation is required.',
    parameters: {
      type: 'OBJECT',
      properties: {
        reason: {
          type: 'STRING',
          description: 'The reason for escalating to a human representative.',
        },
      },
      required: ['reason'],
    },
    isEnabled: true,
    scheduling: FunctionResponseScheduling.INTERRUPT,
  },
];
