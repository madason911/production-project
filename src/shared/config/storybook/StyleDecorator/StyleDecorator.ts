import { StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import 'app/styles/variables/global.scss';

export const StyleDecorator = (story: () => StoryFn) => story();
