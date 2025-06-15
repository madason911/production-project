import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        isOpen: true,
        children: 'Teewuhfoweifhpwehfwehfpewhufpewhfphfwehfpwxt',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Tewekfhweoihfpwehfwehfuewhfouiewhfouewhfphewfhwuepwfhewpfhpewhfeuwphfpewuhfoewuhfpewhfpwehfpwxt',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
