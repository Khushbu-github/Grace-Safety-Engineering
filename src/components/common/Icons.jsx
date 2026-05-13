import { createLucideIcon } from 'lucide-react';

/**
 * Custom brand icons that were removed from recent versions of lucide-react.
 * These are created using the original SVG paths and the createLucideIcon utility.
 */

export const Facebook = createLucideIcon('Facebook', [
  ['path', { d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', key: '1p971n' }],
]);

export const Instagram = createLucideIcon('Instagram', [
  ['rect', { width: '20', height: '20', x: '2', y: '2', rx: '5', ry: '5', key: '1296f8' }],
  ['path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z', key: '1v9998' }],
  ['line', { x1: '17.5', x2: '17.51', y1: '6.5', y2: '6.5', key: '1p07v7' }],
]);

export const Linkedin = createLucideIcon('Linkedin', [
  ['path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z', key: '1p971n' }],
  ['rect', { width: '4', height: '12', x: '2', y: '9', key: '1296f8' }],
  ['circle', { cx: '4', cy: '4', r: '2', key: '1v9998' }],
]);

export const Twitter = createLucideIcon('Twitter', [
  ['path', { d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z', key: '1p971n' }],
]);
