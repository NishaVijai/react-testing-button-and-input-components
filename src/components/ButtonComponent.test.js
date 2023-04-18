import { fireEvent, render } from "@testing-library/react";
import ButtonComponent from "./ButtonComponent.js";

it("Test renders the button", () => {
  const { getByTestId } = render(<ButtonComponent />);
  const getButtonElement = getByTestId("button");
  expect(getButtonElement).toBeTruthy();
});

it("test if only one button renders on the app", () => {
  const { getAllByTestId } = render(<ButtonComponent />);
  const buttonListArray = getAllByTestId("button");

  expect(buttonListArray).toHaveLength(1);
});

it("test if button click renders another button on the app", () => {
  const { getAllByTestId } = render(<ButtonComponent />);
  const buttonList = getAllByTestId("button");
  fireEvent.click(buttonList[0]);
  expect(getAllByTestId("button")).toHaveLength(2);
});
