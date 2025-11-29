import { useState } from "react"
import Pagination from "./Pagination"

const employees = [
  { id: 1, firstName: "Aarav", lastName: "Sharma" },
  { id: 2, firstName: "Vivaan", lastName: "Patel" },
  { id: 3, firstName: "Aditya", lastName: "Verma" },
  { id: 4, firstName: "Krishna", lastName: "Iyer" },
  { id: 5, firstName: "Rohan", lastName: "Nair" },
  { id: 6, firstName: "Aryan", lastName: "Shetty" },
  { id: 7, firstName: "Kabir", lastName: "Reddy" },
  { id: 8, firstName: "Soham", lastName: "Kulkarni" },
  { id: 9, firstName: "Ishaan", lastName: "Menon" },
  { id: 10, firstName: "Nikhil", lastName: "Gowda" },
  { id: 11, firstName: "Priya", lastName: "Shah" },
  { id: 12, firstName: "Ananya", lastName: "Rao" },
  { id: 13, firstName: "Sanya", lastName: "Mehta" },
  { id: 14, firstName: "Aditi", lastName: "Joshi" },
  { id: 15, firstName: "Diya", lastName: "Krishnan" },
  { id: 16, firstName: "Riya", lastName: "Kulkarni" },
  { id: 17, firstName: "Meera", lastName: "Reddy" },
  { id: 18, firstName: "Sneha", lastName: "Iyer" },
  { id: 19, firstName: "Naina", lastName: "Sharma" },
  { id: 20, firstName: "Aarohi", lastName: "Patel" },
  { id: 21, firstName: "Harsh", lastName: "Saxena" },
  { id: 22, firstName: "Manish", lastName: "Bhat" },
  { id: 23, firstName: "Sagar", lastName: "Pai" },
  { id: 24, firstName: "Tushar", lastName: "Nayak" },
  { id: 25, firstName: "Kunal", lastName: "Desai" },
  { id: 26, firstName: "Prateek", lastName: "Singh" },
  { id: 27, firstName: "Chirag", lastName: "Mishra" },
  { id: 28, firstName: "Aman", lastName: "Bora" },
  { id: 29, firstName: "Yash", lastName: "Kumar" },
  { id: 30, firstName: "Dev", lastName: "Mehra" },
]

const Employees = () => {
  const employeesPerPage = 5
  const totalPages = Math.ceil(employees.length / employeesPerPage)
  const [currentPage, setCurrentPage] = useState(1)

  const onPageChange = (page: number) => {
    console.log({ page })
    setCurrentPage(page)
  }

  return (
    <div>
      <h1>Employees</h1>
      <table>
        <thead>
          <td>Emp ID</td>
          <td>First Name</td>
          <td>Last Name</td>
        </thead>
        <tbody>
          {employees
            .slice(
              (currentPage - 1) * employeesPerPage,
              currentPage * employeesPerPage
            )
            .map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  )
}
export default Employees
