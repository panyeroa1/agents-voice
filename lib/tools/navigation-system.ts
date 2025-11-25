/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { FunctionCall } from '../state';
import { FunctionResponseScheduling } from '@google/genai';

export const navigationSystemTools: FunctionCall[] = [
  {
    name: 'find_route',
    description: 'Calculates a route to a specified destination. Requires the destination address or landmark. Optionally accepts the mode of transport.',
    parameters: {
      type: 'OBJECT',
      properties: {
        destination: {
          type: 'STRING',
          description: 'The destination address, landmark, or place name.',
        },
        modeOfTransport: {
          type: 'STRING',
          description: 'The preferred mode of transport (e.g., driving, walking, cycling, transit).',
        },
      },
      required: ['destination'],
    },
    isEnabled: true,
    scheduling: FunctionResponseScheduling.INTERRUPT,
  },
  {
    name: 'find_nearby_places',
    description: 'Searches for places of a specific type within a specified radius. Requires the place type and optionally the search radius.',
    parameters: {
      type: 'OBJECT',
      properties: {
        placeType: {
          type: 'STRING',
          description: 'The type of place to search for (e.g., restaurant, gas station, park, pharmacy).',
        },
        radius: {
          type: 'NUMBER',
          description: 'The search radius in kilometers (default is usually 1-5km).',
        },
      },
      required: ['placeType'],
    },
    isEnabled: true,
    scheduling: FunctionResponseScheduling.INTERRUPT,
  },
  {
    name: 'get_traffic_info',
    description: 'Retrieves real-time traffic updates for a specific location or route. Requires the location name.',
    parameters: {
      type: 'OBJECT',
      properties: {
        location: {
          type: 'STRING',
          description: 'The location (city, street, or area) to check for traffic conditions.',
        },
      },
      required: ['location'],
    },
    isEnabled: true,
    scheduling: FunctionResponseScheduling.INTERRUPT,
  },
];
