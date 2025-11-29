// src/Register.test.tsx
import { render, fireEvent, screen } from "@testing-library/react"
import { describe, it, expect, vi, afterEach } from "vitest"
import Register from "./Register"

describe("Register component", () => {
  const invalidMessage =
    "Username must be at least 8 characters long and include at least one uppercase letter, one number, and one special character."

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("renders the heading", () => {
    render(<Register />)
  })

  it("updates username input value on change", () => {
    render(<Register />)
    const username = screen.getByLabelText(/username/i) as HTMLInputElement
    fireEvent.change(username, { target: { value: "Abcdef1!" } })
    expect(username.value).toBe("Abcdef1!")
  })

  it("sets custom validation message for invalid username", () => {
    render(<Register />)
    const username = screen.getByLabelText(/username/i) as HTMLInputElement
    // missing uppercase (all lowercase) but has number and special, length >=8
    fireEvent.change(username, { target: { value: "abcdef1!" } })
    fireEvent.input(username)
    expect(username.validationMessage).toBe(invalidMessage)
  })

  it("clears custom validation message for valid username", () => {
    render(<Register />)
    const username = screen.getByLabelText(/username/i) as HTMLInputElement
    fireEvent.change(username, { target: { value: "Abcdef1!" } })
    fireEvent.input(username)
    expect(username.validationMessage).toBe("")
  })

  it("calls alert on form submit", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {})
    render(<Register />)
    const submit = screen.getByRole("button", { name: /register/i })
    fireEvent.click(submit)
    expect(alertMock).toHaveBeenCalledTimes(1)
  })
})
