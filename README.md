# Web Service For Company

RESTFUL API for Company Detail

# Endpoints

| Method | Endpoint                 | Description           | Data             |
|--------|--------------------------|-----------------------|------------------|
| GET    | api/company              | List of Company       | '[{}, {}, {} ]'  |
| GET    | api/company/office       | List of Office        | '[{}, {}, {} ]'  |
| GET    | api/company/office/:id   | List of Office by id  | '[{}, {}, {} ]'  |
| POST   | api/company              | Create a new company  | '{"info" : "" }' |
| POST   | api/company/office       | Create a new Office   | '{"info" : "" }' |
| PUT    | api/company/:id          | Update a company      | '{"info" : "" }' |
| DELETE | api/company/:id          | Delete a company      | '{"info" : "" }' |

