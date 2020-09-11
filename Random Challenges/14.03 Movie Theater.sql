-- Design a movie theater web service.

-- Get a list of movies
-- Get a list of showtimes for the movie
-- Buy Tickets

-- Movies
-- PK MovieID
-- String Title

-- ShowTimes
-- PK showTimeID
-- FK movieID
-- FK roomID
-- DateTime ShowTime

-- Rooms
-- PK roomID
-- Integer capacity

-- Tickets
-- PK TicketID
-- FK showTimeID

-- GET /   ...com/movies
-- getListofMovies(date) => return list of movies in the date.
-- GET /   ...com/showTimes
-- getShowTimesFor(movieID) => return list of all showtimes for the specified movie.
-- POST /  ...com/tickets
-- addTicket(showTimeID) => return ticketID (confirmation of transaction) and Room for showing.

SELECT showTime
FROM showTimes
JOIN movies ON showTimes.movieID = movies.movieID
JOIN rooms ON showTimes.roomID = rooms.roomID
JOIN tickets ON showTimes.showTimeID = tickets.showTimeID
WHERE movies.title LIKE "movieID-string"
    AND rooms.capacity - tickets.count > 0
;