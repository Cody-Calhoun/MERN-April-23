const faker = require('faker');
const express = require('express');
const app = express();
const port = 8000;

// Create a function that generates a user object

const createUser = () => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
})

// Create a function that generates a company object

const createCompany = () => ({
    id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    }
})




// ROUTES

// Create a route that returns a new user object

app.get("/api/users/new", (req, res) => {
    // const newUser = createUser();
    // res.json(newUser);
    res.json(createUser());
})

// Create a route that returns a new company object

app.get("/api/companies/new", (req, res) => {
    // const newCompany = createCompany();
    // res.json(newCompany);
    res.json(createCompany());
})

// Create a route that returns both a new user object and a new company object

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    // Entry Step
    const responseObject = {
        user: newUser,
        company: newCompany
    }
    res.json(responseObject);

    // Intermediate step (without new object)
    // res.json({user: newUser, company: newCompany});

    // One liner (Advanced)
    // res.json({user: createUser(),company: createCompany()})
})




app.listen(port, () => console.log(`Listening on port: ${port}`) );