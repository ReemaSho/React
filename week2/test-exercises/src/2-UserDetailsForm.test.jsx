import { render, screen, fireEvent } from "@testing-library/react";

import UserDetailsForm from "./2-UserDetailsForm";

/**
 * UserDetailsForm is a component that has some user interaction so is a little more complex.
 *
 * A nice way of thinking about what to test is to look at the steps the user can take when they interact with this component. So:
 * - Read the current information (check that this is correct based on the prop)
 * - Change a field (check that the changes are applied in the UI)
 * - Click on the Submit button (check that the fields are sent to the function)
 */

const testUser = {
  firstName: "John",
  lastName: "Doe",
  role: "Admin",
};
const changedUser = {
  firstName: "Mary",
  lastName: "Williams",
  role: "User",
};
const mockOnSubmit = jest.fn();
describe("UserDetailsForm", () => {
  it("Correctly fills in the initial values", () => {
    render(
      <UserDetailsForm initialUserValues={testUser} onSubmit={mockOnSubmit} />
    );
    expect(screen.getByTestId(/firstName-input/i)).toHaveValue("John");
    expect(screen.getByTestId(/lastName-input/i)).toHaveValue("Doe");
    expect(screen.getByTestId(/role-input/i)).toHaveValue("Admin");
  });

  it("Correctly changes a fields value", () => {
    render(
      <UserDetailsForm initialUserValues={testUser} onSubmit={mockOnSubmit} />
    );
    const firstNameInputEl = screen.getByTestId(/firstName-input/i);
    const lastNameInputEl = screen.getByTestId(/lastName-input/i);
    const roleInputEl = screen.getByTestId(/role-input/i);

    fireEvent.change(firstNameInputEl, {
      target: { value: changedUser.firstName },
    });
    fireEvent.change(lastNameInputEl, {
      target: { value: changedUser.lastName },
    });
    fireEvent.change(roleInputEl, {
      target: { value: changedUser.role },
    });
    expect(firstNameInputEl).toHaveValue(changedUser.firstName);
    expect(lastNameInputEl).toHaveValue(changedUser.lastName);
    expect(roleInputEl).toHaveValue(changedUser.role);
  });

  it("Submits the right values to the onSubmit function", () => {
    render(
      <UserDetailsForm initialUserValues={testUser} onSubmit={mockOnSubmit} />
    );
    fireEvent.change(screen.getByTestId(/firstName-input/i), {
      target: { value: changedUser.firstName },
    });
    fireEvent.change(screen.getByTestId(/lastName-input/i), {
      target: { value: changedUser.lastName },
    });
    fireEvent.change(screen.getByTestId(/role-input/i), {
      target: { value: changedUser.role },
    });
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(mockOnSubmit).toHaveBeenCalledWith(changedUser);
  });
});
