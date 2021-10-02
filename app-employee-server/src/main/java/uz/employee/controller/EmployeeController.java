package uz.employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uz.employee.entity.Employee;
import uz.employee.exception.ResourceNotFoundException;
import uz.employee.repository.EmployeeRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    EmployeeRepository employeeRepository;

    //    get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    //    create employee rest api
    @PostMapping("/employees")
    public Employee createEmploye(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    //    get employee by id rest api
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist whit id: " + id));
        return ResponseEntity.ok(employee);
    }

    //    update employee rest api
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDelatils) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist whit id: " + id));
        employee.setFirstName(employeeDelatils.getFirstName());
        employee.setLastName(employeeDelatils.getLastName());
        employee.setEmailId(employeeDelatils.getEmailId());
        Employee updatedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }

    //   delete emplopyee rest api
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist whit id: " + id));
        employeeRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted successfully!!!", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
