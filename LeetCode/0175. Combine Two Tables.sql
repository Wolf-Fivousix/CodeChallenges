SELECT firstname, lastname, address.city, address.state
FROM person
LEFT JOIN address ON address.personid = person.personid
;