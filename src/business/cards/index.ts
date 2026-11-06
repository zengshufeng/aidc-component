import type { ComponentType } from 'react';
import { ExampleCard } from './ExampleCard';

export const cards: Record<string, ComponentType<any>> = { example: ExampleCard };
