import React from "react";
import { fireEvent } from "@testing-library/react";
import { Button, ButtonProps } from "./Button";
import { render } from "../../helpers/tests";

const defaultProps: ButtonProps = {
  onClick: jest.fn(),
  variant: "primary",
};

describe("Button component", () => {
  it("renders with children", () => {
    const { getByText } = render(
      <Button {...defaultProps}>Test Button</Button>,
    );
    expect(getByText("Test Button")).toBeInTheDocument();
  });

  it("handles click event", () => {
    const { getByText } = render(<Button {...defaultProps}>Click me</Button>);
    fireEvent.click(getByText("Click me"));
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it("renders with an icon", () => {
    const { getByLabelText } = render(
      <Button
        {...defaultProps}
        icon={
          <span role="img" aria-label="icon">
            🚀
          </span>
        }
      >
        Button with Icon
      </Button>,
    );
    expect(getByLabelText("icon")).toBeInTheDocument();
  });

  it("applies custom styles", () => {
    const customStyle = { backgroundColor: "purple", color: "white" };
    const { getByText } = render(
      <Button {...defaultProps} style={customStyle}>
        Custom Style Button
      </Button>,
    );
    expect(getByText("Custom Style Button")).toHaveStyle(customStyle);
  });
});
