import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';

const meta = {
    title: 'entities/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
