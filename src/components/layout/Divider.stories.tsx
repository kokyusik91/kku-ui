import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Layout/Divider",
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <p className="font-skin mb-3">Content above</p>
      <Divider />
      <p className="font-skin mt-3">Content below</p>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <p className="font-skin mb-3">Section A</p>
      <Divider label="OR" />
      <p className="font-skin mt-3">Section B</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-20">
      <span className="font-skin">Left</span>
      <Divider orientation="vertical" />
      <span className="font-skin">Right</span>
    </div>
  ),
};
