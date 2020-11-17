User Table
| id (pk) | name | email | password | salt |

Post Table
| id (pk)  | author (fk) | title | contents | createdAt | updatedAt | 

Like Table
| Idx (pk) | postId (fk-Post)  | userId (fk-User)  |
