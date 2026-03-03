import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl", "full"] },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div className="border-skin border-skin-border rounded-skin bg-skin-accent/30 p-4">
        <p className="font-skin text-center">Container (lg - 1024px)</p>
      </div>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(["sm", "md", "lg", "xl", "full"] as const).map((s) => (
        <Container key={s} size={s}>
          <div className="border-skin border-skin-border rounded-skin bg-skin-secondary/20 p-3">
            <p className="font-skin text-center text-sm">{s}</p>
          </div>
        </Container>
      ))}
    </div>
  ),
};
