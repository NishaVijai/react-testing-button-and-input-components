import { fireEvent, render, screen } from "@testing-library/react";
import InputComponent from "./InputComponent";

it("test if input element renders properly", () => {
  const { getByTestId } = render(<InputComponent />);
  const getInputElement = getByTestId("inputField");
  expect(getInputElement).toBeTruthy();
});

it("pass prop boolean value as true and test if p element renders properly", () => {
  const { getByTestId } = render(<InputComponent showSection={true} />);
  const getPElement = getByTestId("pElementWeWantToShow");
  expect(getPElement).toBeTruthy();
});

it("pass prop boolean value as false and test p element to not to render", () => {
  const { queryByTestId } = render(<InputComponent showSection={false} />);
  const getPElement = queryByTestId("pElementWeWantToShow");
  expect(getPElement).toBeFalsy();
});

it("test if p element displays the actual input typed inside an input field", () => {
  const { getByTestId } = render(<InputComponent showSection={true} />);
  const getInputElement = screen.getByTestId("inputField");

  const getDisplayTextPElement = getByTestId("displayInputText");
  const inputTestText = "Nisha";
  fireEvent.change(getInputElement, {
    target: { value: inputTestText }
  });
  expect(getDisplayTextPElement.innerHTML).toBe(inputTestText);
});
