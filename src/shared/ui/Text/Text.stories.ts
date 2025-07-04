import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleTextStory: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text',
    },
};

export const TitleStory: Story = {
    args: {
        title: 'Title Title Title',
    },
};

export const TextStory: Story = {
    args: {
        text: 'Text Text Text',
    },
};

export const TitleTextDarkStory: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const TitleDarkStory: Story = {
    args: {
        title: 'Title Title Title',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const TextDarkStory: Story = {
    args: {
        text: 'Text Text Text',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
