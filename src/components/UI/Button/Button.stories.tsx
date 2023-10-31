import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button"; // Импортируйте ваш компонент и его типы

const meta: Meta<typeof Button> = {
  title: "Кнопка",
  component: Button,
  argTypes: {

    variant: {
      type: "string",
      description: "Вариант внешнего вида кнопки",
      defaultValue: "",
      options:['large','medium','small'],
      control: {
        type: "radio",
      },
      
    },
  },
 };
export default meta;

type StoryType = StoryObj<ButtonProps>;

export const Default: StoryType = {
  args: {
    children: "В Корзину",
  },
};

export const RegularButton: StoryType = (args: ButtonProps) => (
  <Button {...args} />
);
RegularButton.args = {
  children: "Regular Button",
  variant: "large",
};
