import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Layout/Card",
  component: Card,
  argTypes: {
    shadow: { control: "select", options: ["none", "sm", "md", "lg"] },
    padding: { control: "select", options: ["none", "sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="font-skin text-lg font-skin-bold">Card Title</h3>
        <p className="font-skin text-sm text-skin-text/70 mt-2">
          This is a neo-brutal card component with thick borders and bold shadows.
        </p>
      </div>
    ),
  },
};

export const Shadows: Story = {
  render: () => (
    <div className="flex gap-6">
      <Card shadow="none" className="w-40 text-center"><p className="font-skin">None</p></Card>
      <Card shadow="sm" className="w-40 text-center"><p className="font-skin">Small</p></Card>
      <Card shadow="md" className="w-40 text-center"><p className="font-skin">Medium</p></Card>
      <Card shadow="lg" className="w-40 text-center"><p className="font-skin">Large</p></Card>
    </div>
  ),
};

export const Padding: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-sm">
      <Card padding="none"><p className="font-skin">padding: none</p></Card>
      <Card padding="sm"><p className="font-skin">padding: sm</p></Card>
      <Card padding="md"><p className="font-skin">padding: md</p></Card>
      <Card padding="lg"><p className="font-skin">padding: lg</p></Card>
    </div>
  ),
};
